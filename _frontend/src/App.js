import logo from './logo.svg';
import {useEffect} from "react"
import './App.css';
import {initSocket, sendSocketMessage} from "./functions/socket";


function App() {
  useEffect(()=>{
    initSocket();
    sendSocketMessage();
  },[]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
