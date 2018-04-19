let http = require('http');

let json = JSON.stringify({
    'firstname': 'Marco',
    'lastname': 'van Poortvliet'
});

http.createServer(function (request, response) {
    console.log('=^.^= A kawaii neko appeared on your server =^.^=');
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(json);
}).listen(80);