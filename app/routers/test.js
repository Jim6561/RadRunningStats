'use strict';

var express = require('express'),
    router = express.Router();

router.get('/', function(req, response) {

    response.send('Hello world and Harry');

});

module.exports = router;
