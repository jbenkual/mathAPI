'use strict';
let http = require('http');
let app = require('express')();

const PORT = 8080;

let doMath = require("./math");
let doWords = require("./words");
let gravatar = require("./gravatar");

app.get('/', (req, res, next) => {
	res.set('Content-Type', 'text/html');
	res.write("<div><a href='math/'>Math</a></div>");
	res.write("<div><a href='words/'>Words</a></div>");
	res.end();
});

app.get(/^\/words\/?(\w\s)*/, (req, res, next) => {
	var data = req.url.split('/');
	var ep = data[1];
	console.log(data);
	if(data[2].length === 0) {
		res.writeHead(200);
		res.write("Welcome to the Words API\n\n");
		res.end("Example:"  + req.headers.host + "/words/How many words and characters are in this sentence?");
	}	
	else { 
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
		res.end(JSON.stringify(doWords(data)));
	}
});

app.get(/^\/math\/?(\w\d\/)*/, (req, res, next) => {
	var data = req.url.split('/');
	var ep = data[1];
	var op = data[2];
	var defVal = (op === 'multiply' || op === 'divide');
	if(data.length === 2 || data[2].length === 0) {
		res.writeHead(200);
		res.write("Welcome to the Math API\n\n");
		res.end("Example: " + req.headers.host + "/math/add/5/multiply/3");
	}
	else {
		res.end(doMath(data, op, defVal) + "");
	}
});

app.get(/^\/gravatarUrl\/?(\w\@\.\_)*/, (req, res, next) => {
	var data = req.url.split('/');
	var ep = data[1];
	console.log(data);
	if(data.length == 2 || data[2].length === 0) {
			res.writeHead(200);
			res.write("Welcome to the Gravatar API\n\n");
			res.end("Example: " + req.headers.host + "/gravatarUrl/your_email@provider.com");
		}
		else {
			res.end(gravatar(data));
		}
});

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});