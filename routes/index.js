var express = require('express');
var router = express.Router();
var ddb = require('../database.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	ddb.getTables();
  res.render('index', { title: "evankozliner" });
});

module.exports = router;
