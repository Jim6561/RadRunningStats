const pg = require('pg');
const jsonfile = require('jsonfile');

//const fileToLoad = 'data/scrapedRaces/11thAnnualDragginTailUltraTrailChallenge50K25K_25K.json';
//const fileToLoad = 'data/scrapedRaces/11thAnnualDragginTailUltraTrailChallenge50K25K_50K.json';
//const fileToLoad = 'data/scrapedRaces/44thAnnualPalaceSaloon5K_5K.json';
//const fileToLoad = 'data/scrapedRaces/4thAnnualBeerMile_5K.json';
//const fileToLoad = 'data/scrapedRaces/5thAnnualNeneFest5K_5K.json';
//const fileToLoad = 'data/scrapedRaces/EpiphanyEndurance10K5K_10K.json';
//const fileToLoad = 'data/scrapedRaces/EpiphanyEndurance10K5K_5K.json';
//const fileToLoad = 'data/scrapedRaces/HOPS&HALFSHELLSTrailRunWalk_5K.json';
//const fileToLoad = 'data/scrapedRaces/RoseCityRun10K&One-MileRun_10K.json';
//const fileToLoad = 'data/scrapedRaces/RoseCityRun10K&One-MileRun_1M.json';
//const fileToLoad = 'data/scrapedRaces/Springtime10K5K1Mile_10K.json';
//const fileToLoad = 'data/scrapedRaces/Springtime10K5K1Mile_1M.json';
//const fileToLoad = 'data/scrapedRaces/Springtime10K5K1Mile_5K.json';
const fileToLoad = 'data/scrapedRaces/TatesHell5KRunWalk_5K.json';
//const fileToLoad = 'data/scrapedRaces/WormGruntinFestival5K_5K.json';

var envParams = jsonfile.readFileSync('.env');
var dataToSave = jsonfile.readFileSync(fileToLoad);

var databaseUrl = (process.env.DATABASE_URL !== undefined) ? process.env.DATABASE_URL : envParams.DATABASE_URL;


console.log('databaseUrl: ' + databaseUrl);

var pool = new pg.Pool({
	connectionString: databaseUrl,
	ssl: true
});

var insertRaceSql = {
	text: 'INSERT INTO race(race_name, event_date, distance, location) VALUES ($1, $2, $3, $4) RETURNING race_id',
	values: [
		dataToSave.raceName,
		dataToSave.eventDate,
		dataToSave.distance,
		dataToSave.location
	]
};

//Generate the sql!
generateResultSql = function(raceId) {

	return dataToSave.results.map((result, index, arr) => {
		return {
			text: 'INSERT INTO runner_result(race_id, name, sex, age, city, state, place, div_tot, div, bib_number, net_time, gun_time, split_time, pace) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
			values: [
				raceId,
				result.name,
				result.sex,
				result.age == '' ? null : result.age,
				result.city,
				result.state,
				result.place,
				result.divtot,
				result.div,
				result.bib,
				result.net,
				result.gun,
				result.split,
				result.pace
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
		raceId = result.rows[0].race_id;
	})
	.then(() => {
		var runnerSql = generateResultSql(raceId);
		
		console.log('ready to insert ' +  runnerSql.length + ' for race: ' + raceId);

		runnerSql.forEach((sql, i, arr) => {

			client.query(sql, (err, result) => {
				console.log('inserting result: ' + i);

				if (err) {
					console.log(sql);
					console.log(err);
					throw err;
				}

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

