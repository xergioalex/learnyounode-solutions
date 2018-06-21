var http = require('http')
var through2map = require('through2-map')

uppercaseData = through2map((chunk) => {
  	return chunk.toString().toUpperCase()
});

server = http.createServer((req, res) => {
  if (req.method == 'POST') {
    req.pipe(uppercaseData).pipe(res)
  }
});

server.listen(process.argv[2])