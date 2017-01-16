import * as path from "path";
import { Server } from "ws";

const port = 8585;

let wsServer: Server = new Server({ port: port });

console.log('Simple Web Socket Server listening on port ' + port);

wsServer.on('connection', websocket => {
    websocket.send('This message was pushed by the WebSocket server');

    websocket.on('message', message =>  { 
        console.log("Server received: %s", message);
        websocket.send(message);
    });
});