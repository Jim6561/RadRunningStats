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

var insertSql = {
	text: 'INSERT INTO race(race_name, event_date, distance) VALUES ($1, $2, $3)',
	values: [
		dataToSave.raceName,
		dataToSave.eventDate,
		dataToSave.distance
	]
};

//console.log(insertSql);

pool.connect()
.then(client => {
	console.log('connected');
	client.query(insertSql).then((result) => {
		console.log('query completed');
		console.log(result);
		console.log('releasing');
		client.release();
		console.log('released');
	})
	
})
.then(() => {
	pool.end();
})
.catch(e => {
	throw err;
})

