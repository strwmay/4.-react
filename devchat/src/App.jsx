import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from "react";
import Join from "./pages/Join";
import Chat from "./pages/Chat";

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      id="App"
      className={`m-0 p-0 vh-100 d-flex flex-column justify-content-center align-items-center ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <button
        className="btn btn-outline-secondary position-absolute top-0 end-0 m-3"
        onClick={toggleTheme}
      >
        <i className={`bi ${isDarkMode ? "bi-sun" : "bi-moon"}`}></i>
      </button>
      {chatVisibility ? (
        <Chat socket={socket} isDarkMode={isDarkMode} />
      ) : (
        <div className="w-75"> {/* Added a wrapper with a wider width */}
          <Join setSocket={setSocket} visibility={setChatVisibility} isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );
}

export default App;
