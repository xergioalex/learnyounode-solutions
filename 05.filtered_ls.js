var fs = require('fs')
fs.readdir(process.argv[2], (err, list) => {
	var filterFiles = list.filter((item) => {
		if (item.indexOf('.'+process.argv[3]) !== -1) {
			return true
		}
		return false
	})
	filterFiles.forEach((item) => {
		console.log(item)
	});
});