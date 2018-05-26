'use strict';

var express = require('express'),
	pgpool = require('../../database/pgpool'),
    router = express.Router();

router.get('/', function(req, response) {

	var nameParam = req.query.name;

	var query = { text: 'SELECT'
				 + ' r.race_id,'
				 + ' r.race_name,'
				 + ' r.distance,'
				 + ' r.event_date,'
				 + ' r.location,'
				 + ' r.finishers,'
				 + ' r.winning_time,'
				 + ' r.first_quartile_time,'
				 + ' r.median_time,'
				 + ' r.third_quartile_time,'
				 + ' r.last_time'
				 + ' FROM race r',
				 values: [] };

console.log(query);

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
				
			})
		}
	});

	//response.send('Getting data');
});

module.exports = router;
