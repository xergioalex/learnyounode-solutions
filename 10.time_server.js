var net = require('net')

var addZeros = (number) => {
	var strNumber = number.toString();
	if (strNumber.length > 1) {
		return strNumber
	} else {
		return '0'+strNumber
	}
}

var server = net.createServer((socket) => {
	var date = new Date();
	var dateOutput = date.getFullYear()+'-'
		   +addZeros(date.getMonth()+1)+'-'
		   +addZeros(date.getDate())+' '
		   +addZeros(date.getHours())+':'
		   +addZeros(date.getMinutes()+'\n')
	socket.end(dateOutput)
})

server.listen(process.argv[2])