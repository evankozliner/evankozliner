var AWS = require('aws-sdk');
var app = require('./app');
// set aws region
AWS.config.region = 'us-west-2';


AWS.config.update({endpoint: "http://localhost:8000"});

//if (app.get('env') === 'development') {
//	// Local dynamo db configuration
//	AWS.config.update({
//	  endpoint: "http://localhost:8000"
//	});
//} else {
//	// Production configuration
//	AWS.config.update({endpoint: "https://dynamodb.us-west-2.amazonaws.com"});
//}

var db = new AWS.DynamoDB();

exports.getTables = function() {
	db.listTables(function(err, data) {
		console.log(data)
		return data
	});
}
