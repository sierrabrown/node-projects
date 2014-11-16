var fs = require('fs'),
	completedTasks = 0,
	tasks = [],
	wordCounts = {},
	filesDir = './text';


// Check if all parallel tasks have been completed
function checkIfComplete() {
	completedTasks++;
	if (completedTasks == tasks.length) {
		for (var index in wordCounts) {
			console.log(index + ': ' + wordCounts[index]);
		}
	}
}

function countWordsInText(text) {
	var words = text
		.toString()
		.toLowerCase()
		.split(/\W+/)
		.sort();
	
	for (var index in words) {
		var word = words[index];
		if (word) {
			wordCounts[word] = (wordCounts[word]) ? wordCounts[word] + 1 : 1;
		}
	}
}

// Gets a list of files in the "text" directory
fs.readdir(filesDir, function(err, files) {
	if (err) throw err;
	for (var index in files) {
		// Defines a task to handle each file. Each task includes a call to a function that will asynchronously read teh file then count the file's word usage.
		var task = (function(file) {
			return function() {
				fs.readFile(file, function(err, text) {
					if (err) throw err;
					countWordsInText(text);
					checkIfComplete();
				});
			}
		})(filesDir + '/' + files[index]);
		//Adds each task to an array of functions to call in parallel
		tasks.push(task);
		// Calls the function on every file before the previous has finished
		for (var task in tasks) {
			tasks[task]();
		}
	}
})