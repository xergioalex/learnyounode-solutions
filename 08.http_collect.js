var http = require('http')

var req = http.get(process.argv[2], (res) => {
	var collect = ''
	res.setEncoding('utf8')
  	res.on('data', (data) => {
		collect += data
	})
	res.on('end', () => {
		console.log(collect.length)
		console.log(collect)
	})
}).on('error', (e) => {
  	console.log("Got error: " + e.message)
})
