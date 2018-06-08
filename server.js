const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 8000; // Setting server port to 8000

app.use(express.static(path.join(__dirname."public")));

io.on('connection', (socket) => { //
    console.log('** Connection Established **');

})

server.listen(port, () => { // Callback for
    console.log("Listening on port: " + port);
})
