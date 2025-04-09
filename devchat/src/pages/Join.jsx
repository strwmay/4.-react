import React, { useRef } from "react";
import "../App.css";

const Join = (props) => {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    console.log("handleSubmit called"); // Debugging log
    const username = usernameRef.current.value.trim();
    if (!username || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    // Conecta ao WebSocket na rota certa
    const socket = new WebSocket("ws://localhost:5000/ws");

    socket.onopen = () => {
      socket.send(JSON.stringify({
        type: "set_username",
        text: username
      }));

      props.setSocket(socket);
      props.visibility(true);
    };

    socket.onmessage = (event) => {
      console.log("Mensagem recebida do servidor:", event.data);
    };

    socket.onerror = (err) => {
      console.error("Erro ao conectar ao servidor WebSocket:", err);
      alert("Erro ao conectar ao servidor.");
    };
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        fontFamily: "Space Grotesk",
        color: props.isDarkMode ? "#fff" : "#000",
        height: "100vh",
      }}
    >
      <h1
        style={{
          fontFamily: "Chakra Petch",
          fontWeight: 700,
          fontSize: "72px",
          color: props.isDarkMode ? "#fff" : "#000",
          textShadow: props.isDarkMode ? "2px 2px 4px rgba(0, 0, 0, 0.5)" : "none",
        }}
      >
        Dev Chat
      </h1>

      <div
        id="join-box"
        className={`mt-4 ${props.isDarkMode ? "bg-black" : "bg-white"} py-5 px-4 d-flex flex-column justify-content-center align-items-center gap-4 shadow-lg`}
        style={{
          maxWidth: "600px",
          width: "100%",
          border: `1px solid ${props.isDarkMode ? "#fff" : "#000"}`,
        }}
      >
        <h3 style={{ color: props.isDarkMode ? "#fff" : "#000" }}>Comece a conversar!</h3>
        <div className="form-floating mb-3 w-100">
          <input
            ref={usernameRef}
            type="text"
            className={`form-control ${props.isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} border-0`}
            id="nomeUsuario"
            placeholder="Nome de usuário"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <label htmlFor="nomeUsuario" className={props.isDarkMode ? "text-light" : "text-dark"}>
            Nome de usuário
          </label>
        </div>
        <button
          className="btn"
          style={{
            backgroundColor: props.isDarkMode ? "#fff" : "#000",
            color: props.isDarkMode ? "#000" : "#fff",
            fontWeight: "bold",
            padding: "10px 30px",
            borderRadius: "0",
          }}
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
