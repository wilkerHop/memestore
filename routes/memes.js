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

router.post('/', (req, res) => {

	var aux = new Meme({
		nome: 'Força De Vontade',
		link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cxJPz7kZaXo" frameborder="0" allowfullscreen></iframe>',
		video: true
	})
	aux.save(aux, (err) => {
		if (err) return console.log(err);
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
		console.log(cursor[len].video)
		if (!cursor[len].video) var content = '<img src="' + cursor[len].link + '">';
		else var content = cursor[len].link;
		// res.send(cursor[1].link);
		res.send(content);
	})
})


router.get('/random/:video', (req, res) => {
	Meme.find({}, (err, cursor) => {
		if (err) return res.send(err);
		var img = '<img src="' + cursor[1].link + '">'
		// res.send(cursor[1].link);
		res.send(img);
	})
})

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = router;