var fs = require('fs')
var http = require('http')

var server = http.createServer((req, res) => {
	var buffer = fs.readFileSync(process.argv[3])
	var str = buffer.toString()
	res.end(str)
})

server.listen(process.argv[2])