var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

/* GET home page. */
router.get('/', function(req, res, next) {
	var db = new AWS.DynamoDB();
	db.listTables(function(err, data) {
	  console.log(data);
  	res.render('index', { title: data });
	});
});

module.exports = router;
