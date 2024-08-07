import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [inputText, setInputText] = useState('');
    const [isChatWindowOpen, setIsChatWindowOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: 'Hello!', isBot: true },
        { text: "I am Nimsara's Bot", isBot: true }
    ]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleButtonClick = async () => {
        if (!inputText) return;
        const newMessages = [...messages, { text: inputText, isBot: false }];
        setMessages(newMessages);
        try {
            const response = await axios.post('http://localhost:8080/api/chat', { message: inputText });
            setMessages([...newMessages, { text: response.data, isBot: true }]);
            setInputText('');
        } catch (error) {
            console.error('There was an error making the POST request:', error);
        }
    };

    const handleBotButtonClick = () => {
        setIsChatWindowOpen(!isChatWindowOpen);
    };

    const handleBotClose = () => {
        setIsChatWindowOpen(false);
    };

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
          handleButtonClick();
      }
  };

    return (
        <>
            {!isChatWindowOpen && (
                <div id="bot-background" className="offset-11 col-2 p-3 position-absolute bottom-0 end-0">
                    <button style={{ border: 'none', background: 'none', padding: 0 }} onClick={handleBotButtonClick}>
                        <img src="https://drive.google.com/thumbnail?id=1tzq7OICPkHjllbNsW4AVNHVL866O-0ew" style={{ width: '40%' }} />
                    </button>
                </div>
            )}

            {isChatWindowOpen && (
              <div id="bot-background" className="offset-9 col-3 p-3 position-absolute bottom-0 end-0 mb-2 mx-4" style={{ backgroundColor: 'rgba(230, 240, 255, 0.25)', zIndex: 10000, boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', borderColor: 'rgba(247, 247, 247, 0.05)', borderRadius: 5, backdropFilter: 'blur(2px)' }}>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleBotClose}></button>
                    <h5>Nimsara's Bot</h5>
                    <div className="chat-messages mb-3" style={{ maxHeight: '330px', overflowY: 'auto' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ textAlign: msg.isBot ? 'left' : 'right', padding: '5px 0' }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    backgroundColor: msg.isBot ? 'white' : '#389bd9',
                                    color: msg.isBot ? '#000' : '#fff'
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ask about me"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            value={inputText}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={handleButtonClick}
                        >
                            Ask
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
