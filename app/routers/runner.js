'use strict';

var express = require('express'),
	escape = require('pg-escape'),
	pgpool = require('../../database/pgpool'),
    router = express.Router();

router.get('/', function(req, response) {

	var nameParam = req.query.name;
	var raceParam = req.query.raceId;

	var clauses = [];

	if (nameParam !== undefined) {
		var searchParam = '%' + nameParam + '%';
		clauses.push(escape('runner.name ILIKE %L', searchParam));
	}
	if (raceParam !== undefined) {
		clauses.push(escape('runner.race_id = %L', raceParam));
	}
	if (clauses.length === 0)
	{
		console.log('no parameters, sending empty result');
		response.send([]);
	}
	
	var query = 'SELECT'
				 + ' r.race_name,'
				 + ' r.distance,'
				 + ' r.event_date,'
				 + ' runner.name,'
				 + ' runner.sex,'
				 + ' runner.age,'
				 + ' runner.city,'
				 + ' runner.state,'
				 + ' runner.place,'
				 + ' runner.div_tot,'
				 + ' runner.div,'
				 + ' runner.bib_number,'
				 + ' runner.net_time,'
				 + ' runner.gun_time,'
				 + ' runner.split_time,'
				 + ' runner.pace'
				 + ' FROM runner_result runner'
				 + ' JOIN race r'
				 + ' ON (r.race_id = runner.race_id)'
				 + ' WHERE ' + clauses.join(' AND ');

	pgpool.connect(function(err, client, release) {
		if (err) {
			console.log('Error!');
			console.log(err);
			return console.error('Error acquiring client', err.stack)
		} else {
			client.query(query, function(err, result) {
				release();
				if (err) {
					return console.error('Error executing query', err.stack)
				}
				response.send(result.rows);
			});
		}
	});
});

module.exports = router;
