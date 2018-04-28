'use strict';



var express = require('express'),
    router = express.Router();



router.use('/', require('./test'));

module.exports = router;
