var server = require('http').createServer();
var port = process.env.PORT || 80;

let json = JSON.stringify({
    'firstname': 'Marco',
    'lastname': 'van Poortvliet'
});

server.listen(port, function () {
    console.log('=^.^= A kawaii neko appeared on your server =^.^=');
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.end(json);
});

console.log('Listening on ' + port);