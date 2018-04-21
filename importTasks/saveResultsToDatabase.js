var pg = require('pg');
const jsonfile = require('jsonfile');


var databaseUrl = process.env.DATABASE_URL;
var sql = 'SELECT NOW();';

console.log('databaseUrl: ' + databaseUrl);

jsonfile.readFile('.env', (err, envParams) => {
	console.log('reading local environment variables');
	if (err) throw err;
	if (!databaseUrl) {
		databaseUrl = envParams.DATABASE_URL;
	}
	everythingElse();
});



everythingElse = function() {
	console.log('everythingElse');
	console.log('databaseUrl: ' + databaseUrl);

	var pool = new pg.Pool({
		connectionString: databaseUrl,
		ssl: true
	});

	pool.connect()
	.then(client => {
		console.log('connected');
		client.query(sql).then((result) => {
			console.log('query completed');
			console.log(result);
			console.log('releasing');
			client.release();
			console.log('released');
		})
		
	})
	.then(() => {
		console.log('ending');
		pool.end();
		console.log('ended');
	})
	.catch(e => {
		console.log('error');
	})
};
