var http = require('http');

var server = http.createServer (function (req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end("<h1>Hello world web with nodeJS</h1>");
});

server.listen(8000);

console.log("Waiting requests at port 8000");