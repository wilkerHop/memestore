const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const config = require('../config/database');
const bodyParser = require('body-parser');

var Meme = require('../models/meme');

router.get('/', (req, res) => {
	Meme.find({}, (err, cursor) => {
		if (err) return res.send(err);
		debugger

		res.send(cursor);
	})
})

router.post('/na/pedra', (req, res) => {

	// var aux = new Meme({
	// 	nome: 'NANI ??!?!?! squirrel',
	// 	link: 'https://www.youtube.com/embed/4I7AA8BZSDo',
	// 	video: true
	// })
	// aux.save(aux, (err) => {
	// 	if (err) return console.log(err);
	// 	res.send({
	// 		status: 210,
	// 		aux
	// 	})
	// })
})

router.post('/post', (req, res) => {
	var video;

	if (!('boolean' == typeof req.body.video))
		video = (req.body.video == 'true');
	else video = req.body.video;

	var aux = new Meme({
		nome: req.body.nome,
		link: req.body.link,
		video
	})
	aux.save(aux, (err) => {
		if (err) return console.log('fodeo');
		res.send({
			status: 200,
			aux
		})
	})
	// res.send(aux);
})

router.get('/get', (req, res) => {
	res.send('polra')
})

router.get('/random', (req, res) => {
	Meme.find({}, (err, cursor) => {
		if (err) return res.send(err);
		var len = Math.trunc(Math.random() * cursor.length);
		res.send(cursor[len]);
	})
})

router.get('/random/tag', (req, res) => {
	Meme.find({}, (err, cursor) => {
		if (err) return res.send(err);
		var len = Math.trunc(Math.random() * cursor.length);
		if (!cursor[len].video) var tag = '<img class="img-responsive" src="' + cursor[len].link + '">';
		else var tag = '<iframe width="560" height="315" src="' + cursor[len].link + '" frameborder="0" allowfullscreen></iframe>';
		res.send(tag);
	})
})

router.get('/random/:bool', (req, res) => {
	if (req.params.bool == 'true' || req.params.bool == 'false') {
		var bool = (req.params.bool == 'false');
		Meme.find({
			'video': {
				$exists: bool
			}
		}, (err, cursor) => {
			console.log('yep')
			if (err) return res.send(err);
			var len = Math.trunc(Math.random() * cursor.length);
			// var video = '<img src="' + cursor[1].link + '">'
			var video = cursor[len];
			res.send(video);
		})
	} else Meme.find({}, (err, cursor) => {
		console.log('nope')
		if (err) return res.send(err);
		var len = Math.trunc(Math.random() * cursor.length);
		res.send(cursor[len]);
	})
})

router.get('/random/tag/:bool', (req, res) => {
	if (req.params.bool == 'true' || req.params.bool == 'false') {
		var bool = (req.params.bool == 'false');
		Meme.find({
			'video': {
				$exists: bool
			}
		}, (err, cursor) => {
			console.log('yep')
			if (err) return res.send(err);
			var len = Math.trunc(Math.random() * cursor.length);
			if (!cursor[len].video) var tag = '<img class="img-responsive" src="' + cursor[len].link + '">';
			else var tag = '<iframe width="560" height="315" src="' + cursor[len].link + '" frameborder="0" allowfullscreen></iframe>';
			res.send(tag);
		})
	} else Meme.find({}, (err, cursor) => {
		console.log('nope')
		var len = Math.trunc(Math.random() * cursor.length);
		if (!cursor[len].video) var tag = '<img class="img-responsive" src="' + cursor[len].link + '">';
		else var tag = '<iframe width="560" height="315" src="' + cursor[len].link + '" frameborder="0" allowfullscreen></iframe>';
		res.send(tag);
	})
})

module.exports = router;