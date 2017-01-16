"use strict";
var ws_1 = require("ws");
var port = 8585;
var wsServer = new ws_1.Server({ port: port });
console.log('Simple Web Socket Server listening on port ' + port);
wsServer.on('connection', function (websocket) {
    websocket.send('This message was pushed by the WebSocket server');
    websocket.on('message', function (message) {
        console.log("Server received: %s", message);
        websocket.send(message);
    });
});
