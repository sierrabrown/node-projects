var flow = require('nimble'),
	exec = require('child_process').exec;

function downloadNodeVersion(version, destination, callback) {
	var url = 'http://nodejs.org/dist/node-v' + version + '.tar.gz';
	var filepath = destination + '/' + version + '.tgz';
	exec('curl' + url + ' >' + filepath, callback);
}