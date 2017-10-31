var mongoose = require('mongoose');

// Meme Schema
var MemeSchema = mongoose.Schema({
	// nome do meme
	nome: {
		type: String,
		required: true
	},
	// link na web
	link: {
		type: String,
		required: true,
		unique: true
	},
	// se é um vídeo
	video: {
		type: Boolean,
	},
});

module.exports = mongoose.model('Meme', MemeSchema);