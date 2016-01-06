var AWS = require('aws-sdk');
var app = require('./app');
// Update region, use my dynamo database from aws
AWS.config.update({
	endpoint: "https://dynamodb.us-west-2.amazonaws.com", 
	region: "us-west-2"});

var db = new AWS.DynamoDB();

exports.getTables = function() {
	db.listTables(function(err, data) {
		console.log(data)
		return data
	});
}
