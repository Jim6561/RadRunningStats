const pg = require('pg');
const jsonfile = require('jsonfile');

const fileToLoad = 'data/scrapedRaces/HOPS&HALFSHELLSTrailRunWalk_5K.json';

var envParams = jsonfile.readFileSync('.env');
var dataToSave = jsonfile.readFileSync(fileToLoad);

var databaseUrl = (process.env.DATABASE_URL !== undefined) ? process.env.DATABASE_URL : envParams.DATABASE_URL;


// console.log('raceName: ' + dataToSave.raceName);
// console.log('eventDate: ' + dataToSave.eventDate);
// console.log('distance: ' + dataToSave.distance);
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


//console.log(resultSql);


//write a generator function to save the results one at a time in a loop. Easy!


/*function* getResultInsertSql(resultsToSave, client) {
	var i = 0;

	while (i<resultSql.length) {
		console.log('inserting a result' + i);
		console.log(resultSql[i]);
		yield client.query(resultSql[i++]);

	}

	console.log('no more results');
}*/


//console.log(resultSql[0]);
//console.log(resultSql[1]);


//console.log(insertRaceSql);







var raceId;


pool.connect()
.then(client => {
	console.log('connected');

	//var gen = getResultInsertSql(dataToSave.results, client);

	client.query(insertRaceSql)
	.then((result) => {
		console.log('query completed');
		//console.log(result);

		raceId = result.rows[0].race_id;
		console.log('finding Id');
		console.log(raceId);



		//console.log('releasing');
		//client.release();
		//console.log('released');
		

	})
	.then(() => {
		console.log('ready to insert more data for race: ' + raceId);



		var runnerSql = generateResultSql(raceId);
		

		client.query(runnerSql[0]);
		console.log('Two');
		client.query(runnerSql[1], () => {
			console.log('it\'s a callback - we did the third insert');

			console.log('releasing');
			client.release();
			console.log('released');
		});
		console.log('Three');

		// console.log('releasing');
		// client.release();
		// console.log('released');

		//while (!gen.next().done) {
		//	console.log('doing the thing');
		//}
		//console.log(gen.next());



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

