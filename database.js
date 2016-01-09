var AWS = require('aws-sdk');
var app = require('./app');
// Update region, use my dynamo database from aws
AWS.config.update({
	endpoint: "https://dynamodb.us-west-2.amazonaws.com", 
	region: "us-west-2"});

var db = new AWS.DynamoDB();

exports.getTables = () => {
	db.listTables((err, data) => {
		console.log(data)
		return data
	});
}

exports.getPosts = callback => {
	db.scan({TableName: 'Posts'}, (err, data) => {
		if (err) {
			console.log(JSON.stringify(err, null, 2));
		} else {
			callback(data);
		}
	});
}
