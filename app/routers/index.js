'use strict';

var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Cats' });
});

//router.use('/', require('./test'));
router.use('/runner', require('./runner'));

module.exports = router;
