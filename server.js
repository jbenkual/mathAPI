var http = require('http');

var PORT = 8080;

var server = http.createServer(function(req, res) {

	console.log(req.url);

});


server.listen(PORT, function() {
	console.log("MathAPI server listening on port: " + PORT);
});