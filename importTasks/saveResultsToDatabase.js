const pg = require('pg');
const jsonfile = require('jsonfile');

const fileToLoad = 'data/scrapedRaces/HOPS&HALFSHELLSTrailRunWalk_5K.json';

var envParams = jsonfile.readFileSync('.env');
var dataToSave = jsonfile.readFileSync(fileToLoad);

var databaseUrl = (process.env.DATABASE_URL !== undefined) ? process.env.DATABASE_URL : envParams.DATABASE_URL;


console.log('databaseUrl: ' + databaseUrl);

var pool = new pg.Pool({
	connectionString: databaseUrl,
	ssl: true
});

var insertRaceSql = {
	text: 'INSERT INTO race(race_name, event_date, distance) VALUES ($1, $2, $3) RETURNING race_id',
	values: [
		dataToSave.raceName,
		dataToSave.eventDate,
		dataToSave.distance
	]
};

//Generate the sql!
generateResultSql = function(raceId) {

	return dataToSave.results.map((result, index, arr) => {
		return {
			text: 'INSERT INTO runner_result(race_id, name, sex, age) VALUES ($1, $2, $3, $4)',
			values: [
				raceId,
				result.name,
				result.sex,
				result.age
			]
		};
	});
};

var raceId;

pool.connect()
.then(client => {
	console.log('connected');

	client.query(insertRaceSql)
	.then((result) => {
		console.log('query completed');
		//console.log(result);

		raceId = result.rows[0].race_id;
		console.log('finding Id');
		console.log(raceId);

	})
	.then(() => {
		console.log('ready to insert more data for race: ' + raceId);

		var runnerSql = generateResultSql(raceId);
		
		runnerSql.forEach((sql, i, arr) => {

			client.query(sql, () => {
				console.log('inserting result: ' + i);
				if (i === runnerSql.length-1) {

				console.log('releasing');
				client.release();
				console.log('released');
				}
			});
		});

	})
})
.then(() => {
	console.log('ending');
 	pool.end();
 	console.log('ended');
})
.catch(err => {
	throw err;
})

