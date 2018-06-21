var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2])
var str = buffer.toString()
var newLines = str.split('\n')

console.log(newLines.length)


