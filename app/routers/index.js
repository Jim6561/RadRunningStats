'use strict';

var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Jimmy' });
});

router.use('/runner', require('./runner'));
router.use('/race', require('./race'));

module.exports = router;
