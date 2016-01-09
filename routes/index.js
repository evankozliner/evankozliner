var express = require('express');
var router = express.Router();
var ddb = require('../database.js');

router.get('/', (req, res, next) => {
	//ddb.getTables();
	//ddb.getPosts( () => {console.log("hi")});
  res.render('index', { title: "evankozliner" });
});

router.get('/posts', (req, res, next) => {
	ddb.getPosts( function(posts) {
		res.json({posts: posts});
	});
});

module.exports = router;
