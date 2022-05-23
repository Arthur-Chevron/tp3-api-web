const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server, {
 cors: {
   origin: "*",
 },
});

const PORT = 8080;

io.on("connection", (socket) => {
    console.log("connection initiated");
    const channel = socket.handshake.query.channel;
    console.log("data received from socket", channel);

    socket.join(channel);

    socket.on("disconnect", () => {
        console.log("disconnected");
    });

    socket.on("CUSTOM_EVENT", (data) => {
        console.log("data received",data);
        socket.broadcast.to(data.channel).emit("CUSTOM_EVENT_RECIEVED",
            {message:"I have received your massage"}
        )
    });

});

server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));