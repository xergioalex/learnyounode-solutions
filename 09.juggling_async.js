var http = require('http')

var args = process.argv
var argsIndex = 2
var collectArray = []
var collectIndex = 0
var url = args[argsIndex]

var collectData = (url, callback) => {
	var req = http.get(url, (res) => {
		var collect = ''
		res.setEncoding('utf8')
	  	res.on('data', (data) => {
			collect += data
		})
		res.on('end', () => {
			callback(collect)
		})
	}).on('error', (e) => {
	  	console.log('Got error: ' + e.message)
	})
}

var callback = (urlCollectData) => {
	collectArray[collectIndex] = urlCollectData;
	collectIndex++
	argsIndex++
	if (argsIndex === args.length) {
		collectArray.forEach((item) => {
			console.log(item);
		})
	} else {
		url = args[argsIndex]
		collectData(url, callback)
	}
}

collectData(url, callback)

