import { useState } from "react";

type Message = {
  text: string;
  sender: "ai" | "user";
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your personal assistant.", sender: "ai" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
  if (!input.trim()) return; // Prevent empty messages

  // Create a new array with user input message
  const newMessages: Message[] = [
    ...messages,
    { text: input, sender: "user" }, // Ensure sender is "user"
  ];
  setMessages(newMessages); // Update state
  setInput("");

  try {
    const res = await fetch("http://127.0.0.1:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();

    // Append AI response to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: data.response, sender: "ai" },
    ]);
  } catch (error) {
    console.error("Error fetching response:", error);
  }
};


  return (
    <div className="flex flex-col max-w-lg mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <div className="h-80 overflow-y-auto p-2 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex mt-2">
        <input
          className="flex-1 p-2 border rounded-l-lg"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
