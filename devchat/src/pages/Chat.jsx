import React, { useEffect, useRef, useState } from "react";
import "../App.css";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    const socket = props.socket;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "receive_message") {
        setMessageList((current) => [...current, data.message]);
      }
    };

    return () => {
      socket.close();
    };
  }, [props.socket]);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = () => {
    const messageText = messageRef.current.value.trim();
    if (!messageText) return;

    const message = {
      type: "message",
      text: messageText,
    };

    console.log("Sending message:", message); // Added console.log for debugging

    props.socket.send(message);

    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="d-flex flex-column align-items-center">
        <h2
          className="text-center mt-4"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: props.isDarkMode ? "#fff" : "#000",
            textShadow: props.isDarkMode
              ? "1px 1px 3px rgba(0, 0, 0, 0.5)"
              : "none",
          }}
        >
          Conecte-se com outros <br /> desenvolvedores em tempo real!
        </h2>

        <div
          id="chat-container"
          className={`chat m-4 ${
            props.isDarkMode ? "bg-black" : "bg-white"
          } p-3 d-flex flex-column`}
          style={{
            border: `1px solid ${props.isDarkMode ? "#fff" : "#000"}`,
          }}
        >
          <div
            id="chat-body"
            className="d-flex flex-column gap-3 overflow-y-hidden h-100"
            style={{
              padding: "10px",
              color: props.isDarkMode ? "#fff" : "#000",
            }}
          >
            {messageList.map((message, index) => (
              <div
                className={`${
                  message.authorId === props.socket.id
                    ? "align-self-end ms-5"
                    : "align-self-start me-5"
                } p-2`}
                style={{
                  backgroundColor:
                    message.authorId === props.socket.id
                      ? props.isDarkMode
                        ? "#fff"
                        : "#000"
                      : props.isDarkMode
                      ? "#333"
                      : "#ddd",
                  color:
                    message.authorId === props.socket.id
                      ? props.isDarkMode
                        ? "#000"
                        : "#fff"
                      : props.isDarkMode
                      ? "#fff"
                      : "#000",
                }}
                key={index}
              >
                <div id="message-author" className="fw-bold">
                  {message.author}
                </div>
                <div id="message-text">{message.text}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div
            id="chat-footer"
            className="input-group"
            style={{
              borderTop: `1px solid ${props.isDarkMode ? "#fff" : "#000"}`,
              paddingTop: "10px",
            }}
          >
            <input
              ref={messageRef}
              autoFocus
              type="text"
              className={`form-control ${
                props.isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
              } border-0`}
              placeholder="Mensagem"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <button
              className="btn"
              style={{
                backgroundColor: props.isDarkMode ? "#fff" : "#000",
                color: props.isDarkMode ? "#000" : "#fff",
                fontWeight: "bold",
              }}
              onClick={() => handleSubmit()}
            >
              <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </div>

        <p
          className="text-center"
          style={{
            fontSize: "15px",
            color: props.isDarkMode ? "#fff" : "#000",
          }}
        >
          Por favor, seja respeitoso com os outros participantes.
        </p>
      </div>
    </div>
  );
};

export default Chat;
