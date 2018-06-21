var http = require('http');
var url = require('url');

var routes = {
    '/api/parsetime': (parsedUrl) => {
        var date = new Date(parsedUrl.query.iso);
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    },
    '/api/unixtime': (parsedUrl) => {
        var date = new Date(parsedUrl.query.iso);
        return { unixtime: date.getTime() };
    }
}

server = http.createServer((req, res) => {
    parsedUrl = url.parse(req.url, true);
    resultApi = routes[parsedUrl.pathname];
    if (resultApi) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(resultApi(parsedUrl)));
    } else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(process.argv[2]);