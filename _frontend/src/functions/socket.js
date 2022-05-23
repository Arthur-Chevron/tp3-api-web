import io from "socket.io-client";
import axios from "axios";

let socket;
const SOCKET_URL = "http://localhost:8080";

export const initSocket = () => {
    socket = io(SOCKET_URL, {
        query: {channel:"channel_1",
        message: "Hello, I am connecting"}
    });
socket.on("CUSTOM_EVENT_RECIEVED",(data)=>{
    console.log("I have received a responce from backend",data.message)
});
}
 
export const sendSocketMessage = () => {
    if(socket){
        socket.emit("CUSTOM_EVENT", {
            channel: "channel_1",
            message: "I am sending you a message"
        })
    }
}