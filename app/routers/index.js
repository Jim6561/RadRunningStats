'use strict';



var express = require('express'),
    router = express.Router();

router.use('/', require('./test'));
router.use('/runner', require('./runner'));

module.exports = router;
