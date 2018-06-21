var mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], (err, data) => {
	if (err) {
		console.error('This is an error!')
	} else {
		data.forEach((item) => {
			console.log(item)
		})
	}
})