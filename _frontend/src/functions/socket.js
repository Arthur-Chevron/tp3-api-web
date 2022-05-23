import io from "socket.io-client";

let socket;
const SOCKET_URL = "http://localhost:8080";

// initialisation de la connexion au channel
// ok donc vu que le channel est déjà précisé, il n'est pas nécessaire de demande une room à join
// Tous les messages seront donc dans la room suivant => channel_1
export const initSocket = () => {
    socket = io(SOCKET_URL, {
        query: {channel: "channel_1",
        message: "Hello, I am connecting"}
    });
    socket.on("CUSTOM_EVENT_RECIEVED",(data) =>{
        console.log("I have received a response from backend", data.message)
    });
}

// on envoie le message
export const sendSocketMessage = () => {
    if (socket) {
        socket.emit("CUSTOM_EVENT", {
            channel: "channel_1",
            message: "I am sending you a message"
        })
    }
}