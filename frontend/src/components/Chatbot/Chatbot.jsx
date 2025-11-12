import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage("👋 Hello! Welcome to Detagenix!");
      }, 500);
      setTimeout(() => {
        addBotMessage("We're a leading software development company specializing in AI, Web, and Mobile solutions. How can I assist you today?");
      }, 1500);
      setTimeout(() => {
        setShowOptions(true);
      }, 2500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const addBotMessage = (text) => {
    setMessages((prev) => [...prev, { text, sender: "bot", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { text, sender: "user", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
  };

  const handleOptionClick = (option) => {
    setShowOptions(false);
    addUserMessage(option);

    setTimeout(() => {
      switch (option) {
        case "Our Services":
          addBotMessage("We offer:\n• AI & ML Solutions\n• Web Development\n• Mobile App Development\n• Cloud Solutions\n• UI/UX Design\n\nWould you like to know more about any specific service?");
          break;
        case "Contact Information":
          addBotMessage("📍 Location: Indore, Madhya Pradesh, India\n📧 Email: hr@detagenix.com\n📞 Phone: +91 8607997261 || +91 7489834717");
          break;
        case "Chat on WhatsApp":
          addBotMessage("Great! I'll redirect you to our WhatsApp Business account where our team can assist you personally. 🚀");
          setTimeout(() => {
            const phoneNumber = "918607997261";
            const message = encodeURIComponent("Hi! I'd like to get in touch with Detagenix.");
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
          }, 1500);
          break;
        default:
          addBotMessage("How else can I help you?");
      }
      setTimeout(() => {
        setShowOptions(true);
      }, 1000);
    }, 800);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    addUserMessage(inputValue);
    setInputValue("");
    setShowOptions(false);

    // Simple AI responses based on keywords
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      if (lowerInput.includes("service") || lowerInput.includes("what do you do")) {
        addBotMessage("We specialize in AI/ML, Web Development, Mobile Apps, Cloud Solutions, and UI/UX Design. Would you like to discuss a project?");
      } else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("quote")) {
        addBotMessage("Pricing depends on your project requirements. Let's connect on WhatsApp to discuss your needs and provide a custom quote! 💼");
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        addBotMessage("Hello! 👋 How can I help you today?");
      } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("call")) {
        addBotMessage("You can reach us at:\n📧 hr@detagenix.com\n📞 +91 8607997261\n\nOr chat with us on WhatsApp!");
      } else {
        addBotMessage("That's a great question! For detailed information, I'd recommend connecting with our team on WhatsApp. They'll be happy to assist you! 😊");
      }
      setTimeout(() => {
        setShowOptions(true);
      }, 1000);
    }, 800);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        className={`chatbot-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-chat-dots-fill"></i>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <i className="bi bi-robot"></i>
              </div>
              <div>
                <h4>Detagenix AI Assistant</h4>
                <span className="status">
                  <span className="status-dot"></span> Online
                </span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-content">
                  <p>{msg.text}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Quick Options */}
            {showOptions && (
              <div className="quick-options">
                <p className="options-label">Quick Options:</p>
                <button onClick={() => handleOptionClick("Our Services")} className="option-btn">
                  💼 Our Services
                </button>
                <button onClick={() => handleOptionClick("Chat on WhatsApp")} className="option-btn whatsapp-option">
                  <i className="bi bi-whatsapp"></i> Chat on WhatsApp
                </button>
                <button onClick={() => handleOptionClick("Contact Information")} className="option-btn">
                  📞 Contact Info
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className="chatbot-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" aria-label="Send message">
              <i className="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
