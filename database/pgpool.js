const fs = require('fs');
const pg = require('pg');
const jsonfile = require('jsonfile');

var envParams = fs.existsSync('.env') ? jsonfile.readFileSync('.env') : {};
var databaseUrl = (process.env.DATABASE_URL !== undefined) ? process.env.DATABASE_URL : envParams.DATABASE_URL;


//console.log('databaseUrl: ' + databaseUrl);

var pool = new pg.Pool({
	connectionString: databaseUrl,
	ssl: true
});

module.exports = pool;