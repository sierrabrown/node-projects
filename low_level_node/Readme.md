Core of Node:
	Powerful HTTP parser consisting of ~1,500 lines of optimized C (written by Ryan Dahl)
	Low-level TCP API that Node exposes to Javascript
	Combined = Low level, very flexible HTTP server
	
Anatomy of a Node Web App:

3. Application logic
	Route handlers, directory structure, business algorithms
	Your app itself
	http.createServer()
	app.use()

2. Reusable modules and Community moddules
	Database drivers, middleware, upload parsing, routing, realtime socket
	Get projects done easily
	node-cgi
	nod-formidable
	mongoose
	socket.io
	express
	connect

1. Node Core
	Low-level HTTP parser, low-level TCP server
	Always lightweight and low level
	
	

4.1 HTTP Server fundamentals
- Lower level than familiar frameworks or languages such as PHP
- Goal of being fast and flexible

- How node presents incoming HTTP requests to developers
- How to write a basic HTTP server that responds with 'hello world'
- How to read incoming request headers and set outgoing response headers
- How to set the status code of an HTTP response