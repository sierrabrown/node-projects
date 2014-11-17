var http = require('http');
var server = http.createServer(function(req, res) {
	//handle request
	
	//For every HTTp request received by the server, the given callback will be invoked with new req and res instances, after the HTTP headers have been parsed.
	
	//Open url, browser opens TCP connection to your node HTTP server, and sends an HTTP request to the server. Node parses up to the end of the HTTP headers befor invoking the request handlers. Long-running process which will serve many requests throughout it's lifetime.
	res.end('Hello World');
});

server.listen(3000, '127.0.0.1');

//Next: response status codes, header fields, handle exceptins, higher level concepts

