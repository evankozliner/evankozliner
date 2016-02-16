var express = require('express');
var router = express.Router();
var ddb = require('../database');
var Showdown = require('showdown');

router.get('/', (req, res, next) => {
	ddb.getSinglePost('About', aboutData => {
		res.render('index', {title: 'evankozliner', 
			aboutData: parse(JSON.parse(aboutData).Item.body.S),
			})
	})
})
router.get('/posts', (req, res, next) => {
	ddb.getPosts( posts => {
		var blogPosts = posts.Items.filter( post => {
				return post.blog.B 
		})
		res.render('posts', {posts: blogPosts})
	})
})
router.get('/download', (req, res, next) => {
	var file = __dirname + '/../junior_resume.pdf'
	res.download(file)
})
// TODO Refactor /about to use this method
// TODO Clean the post data *before* bassing it to the front end
router.get('/posts/:postId', (req, res, next) => {
	var titleKey = req.params.postId.replace(/_/g, " ")
	ddb.getSinglePost(titleKey, post => {
		res.render('single', {parsedBody: parse(JSON.parse(post).Item.body.S),
			title: titleKey	
		})
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
