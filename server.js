var http = require('http');

var PORT = 8080;

var doMath = require("./math");
var doWords = require("./words");


var server = http.createServer(function(req, res) {

	var data = req.url.split('/');
	var ep = data[1];


	if (ep === 'math') {
		var op = data[2];
		var defVal = (op === 'multiply' || op === 'divide');
		if(data.length === 2 || data[2].length === 0) {
			res.writeHead(200);
			res.write("Welcome to the Math API\n\n");
			res.end("Example: " + req.headers.host + "/math/add/5/multiply/3");
		}
		else {
			res.write(doMath(data, op, defVal) + "");
		}
	} else if (ep === 'words') {
		console.log(data);
		if(data[2].length === 0) {
			res.writeHead(200);
			res.write("Welcome to the Words API\n\n");
			res.end("Example: How many words and characters are in this sentence?");
		}	
		else { 
			res.writeHead(200, {
				"Content-Type": "application/json"
			});
			res.end(JSON.stringify(doWords(data)));
		}
	} else {
		res.write("<div><a href='math/'>Math</a></div>");
		res.write("<div><a href='words/'>Words</a></div>");
	}

	res.end();
});


server.listen(PORT, function() {
	console.log("MathAPI server listening on port: " + PORT);
});