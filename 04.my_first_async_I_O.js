var fs = require('fs')
fs.readFile(process.argv[2], (err, buffer) => {
	var str = buffer.toString()
	var newLines = str.split('\n')

	console.log(newLines.length - 1)
});