let http = require('http');

let json = JSON.stringify({
    'firstname': 'Marco',
    'lastname': 'van Poortvliet'
});

http.createServer(function (request, response) {
    console.log('=^.^= A kawaii neko appeared on your server =^.^=');
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(json);
}).listen(process.env.PORT || 3000);

console.log('Server started listening on port 3000');