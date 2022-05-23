import { useEffect, useState } from "react"
import './App.css';
import { initSocket, sendSocketMessage } from "./functions/socket";
import Chat from './componentes/Chat.js'

function App() {

  // initialisation de la connexion entre l'application et le serveur
  useEffect(() => {
    initSocket();
    sendSocketMessage();
  },[])

  const [allMessages, setAllMessages] = useState([])

  const sendMessage = (value) => {
    sendSocketMessage(value)
    // udpate all messages
    setAllMessages((array) => [...array, value])
  }
  
  return (
    <div className="App">
      <header className="App-header">

        <Chat
            sendMessage={sendMessage}
            allMessages={allMessages}
        />
        
      </header>
    </div>
  );
}

export default App;
