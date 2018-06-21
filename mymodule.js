module.exports = function (dir, filter, callback) {
	var fs = require('fs');
	fs.readdir(dir, (err, list) => {
		if (err) {
			return callback(err);
		}

		var filterFiles = list.filter((item) => {
			if (item.indexOf('.'+filter) !== -1) {
				return true;
			}
			return false;
		});

		callback(null, filterFiles);
	});
}