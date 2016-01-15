var express = require('express');
var router = express.Router();
var ddb = require('../database');
var Showdown = require('showdown');

router.get('/', (req, res, next) => {
	ddb.getAbout( aboutData => {
		res.render('index', {title: 'evankozliner', 
			aboutData: parse(JSON.parse(aboutData).Item.body.S)})
	})
})

router.get('/posts', (req, res, next) => {
	ddb.getPosts( posts => {
		res.json({posts: posts})
	})
})
// TODO Refactor /about to use this method
// TODO Clean the post data *before* bassing it to the front end
router.get('/posts/:postId', (req, res, next) => {
	ddb.getSinglePost(req.params.postId.replace(/_/g, " "), post => {
		console.log(post)
		res.json({post: parse(post)})
	})
})

router.get('/about', (req, res, next) => {
	ddb.getAbout( aboutData => {
		res.json({data: parse(aboutData)})
	})
})

function parse(markdown) {
	var converter = new Showdown.Converter()
	return converter.makeHtml(markdown)
}

module.exports = router
