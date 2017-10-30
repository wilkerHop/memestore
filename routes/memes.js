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
router.post('/put', (req, res) => {

	// console.log(req.body.nome + '\n' + req.body.link + '\n' + req.body.video + '\n')

	var aux = new Meme({
		nome: req.body.nome,
		link: req.body.link,
		video: req.body.video
	})
	aux.save(aux, (err) => {
		if (err) return console.log('fodeo');
		res.send({
			status: 210,
			aux
		})
	})
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

// <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/cxJPz7kZaXo\" frameborder=\"0\" allowfullscreen><\/iframe>

router.get('/random/tag', (req, res) => {
	Meme.find({}, (err, cursor) => {
		if (err) return res.send(err);
		var len = Math.trunc(Math.random() * cursor.length);
		if (!cursor[len].video) var content = '<img src="' + cursor[len].link + '">';
		else var content = '<iframe width="560" height="315" src="' + cursor[len].link + '" frameborder="0" allowfullscreen></iframe>';
		res.send(content);
	})
})


router.get('/random/:bool', (req, res) => {
	var bool = (req.param.video == 'false');
	Meme.find({'video': {$exists: bool}}, (err, cursor) => {
		if (err) return res.send(err);
		var len = Math.trunc(Math.random() * cursor.length);		
		// var video = '<img src="' + cursor[1].link + '">'
		var video = cursor[len];
		res.send(video);
	})
})

router.get('/random/tag/:video', (req, res) => {
	Meme.find({'video': true}, (err, cursor) => {
		if (err) return res.send(err);
		var len = Math.trunc(Math.random() * cursor.length);		
		// var video = '<img src="' + cursor[1].link + '">'
		var video = cursor[len];
		res.send(img);
	})
})

module.exports = router;