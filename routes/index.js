var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

/* GET home page. */
router.get('/', function(req, res, next) {
	var db = new AWS.DynamoDB();
	db.listTables(function(err, data) {
	  console.log(data.TableNames);
  	res.render('index', { title: data.TableNames });
	});
});

module.exports = router;
