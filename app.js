const express = require('express');
const app = express();
let cors = require('cors')
var mongoose = require('mongoose');
var config = require('./config/database');
const bodyParser = require('body-parser');
mongoose.connect(config.database, (err) => {
	if (err) return console.log("NÃO FOI POSSIVEL CONECTAR COM O MLAB\n" + err);
	console.log("CONEXÃO COM O MLAB EFETUADA\nPORTA 3000");
});
var db = mongoose.connection;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors({
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204,
	allowedHeaders: ['Origin', 'X-Requested-With', 'xx-access-token', 'Content-Type', 'Accept']
}))

app.get('/',(req,res)=>{
	res.send({q: 'loucura'})
})

var memes = require('./routes/memes');
app.use('/memes', memes);

app.listen(process.env.PORT || 3000, () => {
	console.log('running on '+3000  +' port');
})