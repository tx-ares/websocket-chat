const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 8000; // Setting server port to 8000

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => { //
    console.log('** Connection Established **');

    socket.on('event1', (data) => { // Message from client
        console.log(data.msg , " << message event1")
    });

    socket.emit('event2', { // When a message is sent to socket server, the server emits an event and console logs a msg.
        msg: 'Server to client, do you read me? Over.'
    });

    socket.on('event3', (data) => {
        console.log(data.msg, " << message event3");
        socket.emit('event4', {
            msg: 'Client to Server: Loud and clear! :D'
        })
    })
})

server.listen(port, () => { // Callback for
    console.log("Listening on port: " + port);
})
