import React, { useState } from "react";

const SimpleChatPrompt = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  const handleSendMessage = () => {
    // Add user's message to chat history
    setChatHistory([...chatHistory, { message: userInput, type: "user" }]);

    // Process user's message (You can replace this with your own logic)
    const botResponse = ["I received your message: ", userInput];

    // Add bot's response to chat history
    setChatHistory([...chatHistory, { message: botResponse, type: "bot" }]);

    // Clear user input
    setUserInput("");
  };

  return (
    <div className="grid grid-rows-8 overflow-auto">
      {/* Display chat history */}
      <div className="flex row-span-1">
        {/* <img /> */}
        <h1 className="font-bold ">Ask Joseph the Court Advisor</h1>
      </div>
      <div className="row-span-6 p-1 overflow-auto">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`${msg.type} grid gap-2 pb-4`}>
            <span className="rounded-md border-2 border-black bg-blue-500">
              {msg.message[1]}
            </span>
            <span className="rounded-md border-2 border-black bg-green-500">
              {msg.message[0]}
            </span>
          </div>
        ))}
      </div>
      <div className="grid z-10 row-span-1 w-full h-1/2 my-auto">
        <div className="grid grid-cols-3  mx-auto">
          <input
            className="col-span-2"
            type="text"
            value={userInput}
            onChange={handleUserInput}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>

      {/* Input for user to type messages */}
    </div>
  );
};

export default SimpleChatPrompt;
