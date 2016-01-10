var express = require('express');
var router = express.Router();
var ddb = require('../database');

router.get('/', (req, res, next) => {
	ddb.getAbout( aboutData => {
		res.render('index', {title: 'evankozliner', 
			aboutData: JSON.parse(aboutData).Item.body.S})
	})
})

router.get('/posts', (req, res, next) => {
	ddb.getPosts( posts => {
		res.json({posts: posts})
	})
})

router.get('/about', (req, res, next) => {
	ddb.getAbout( aboutData => {
		res.json({data: aboutData})
	})
})

module.exports = router
