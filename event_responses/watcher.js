// Example of how the event emitter can be a useful class from which to create new classes

function Watcher(watchDir, processedDir) {
	this.watchDir = watchDir;
	this.processedDir = processedDir;
}

var events 	= require('events'),
		util		= require('util'),
		fs			= require('fs'),
		watchDir=	'./watch',
		processedDir = './done';

// inherits is part o node's built in util module
// Clean inheritance of behavior
// Equivalent to:
// Watcher.prototype = new events.EventEmitter();
util.inherits(Watcher, events.EventEmitter);

Watcher.prototype.watch = function() {
	var watcher = this;
	fs.readdir(this.watchDir, function(err, files) {
		if (err) throw err;
		for (var index in files) {
			watcher.emit('process', files[index]);
		}	
	})
}

Watcher.prototype.start = function() {
	// fs.watchFile is triggered when something happens in the watched directory
	var watcher = this;
	fs.watchFile(watchDir, function() {
		watcher.watch();
	})
}

var watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function process(file) {
	var watchFile = this.watchDir + '/' + file;
	var processedFile = this.processedDir + '/' + file.toLowerCase();
	
	fs.rename(watchFile, processedFile, function(err) {
		if (err) throw err;
	});
})

watcher.start();