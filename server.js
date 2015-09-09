var http = require('http');

var PORT = 8080;

var server = http.createServer(function(req, res) {

	var data = req.url.split('/');
	var op = data[2];
	var defVal = (op === 'multiply' || op === 'divide');

	var total = data.splice(3).reduce(function(total, num){
		num = parseInt(num);
		switch (op) {
			case 'add':
				return total + num;
			case 'subtract':
				return total - num;
			case 'multiply':
				return total * num;
			case 'divide':
				return total / num;
			default:
				return num;
		}
	}, defVal);

	res.write(total + "");

	res.end();

});


server.listen(PORT, function() {
	console.log("MathAPI server listening on port: " + PORT);
});