import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Navbar from './navbar'
import bg from './asset/bg.jpg';
// Initialize socket outside of the component to avoid re-creating it on every render
const socket = io('http://localhost:3000');

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null); // State for connection errors

  useEffect(() => {
    const handleConnect = () => {
      setIsConnected(true);
      setError(null); // Clear any connection errors
      console.log('Connected to server');
    };

    const handleDisconnect = () => {
      setIsConnected(false);
      console.log('Disconnected from server');
    };

    const handleError = (err) => {
      setError(err.message); // Set the error message
      console.error('Socket error:', err);
    };

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('broadcast', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    socket.on('connect_error', handleError);

    // Cleanup function to remove event listeners
    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('broadcast');
      socket.off('connect_error', handleError);
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() && isConnected) {
      socket.emit('new_message', message);
      setMessage('');
    }
  };

  return (
    <div>
     
    <div className="p-4 max-w-3xl mx-auto bg-gray-800 text-white h-[640px] flex flex-col" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity:""
        }}>
    
     
      {error && (
        <div className="bg-red-500 text-white p-2 mb-2">
          Error connecting to server: {error}
        </div>
      )}
      {isConnected ? (
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col-reverse">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-md  ${
                  index % 2 === 0 ? 'bg-green-500 self-end' : 'bg-blue-500  self-start'
                }`}
              >
                {msg}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          Connecting...
        </div>
      )}
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 p-2 border-none rounded-md text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 rounded-md text-white"
          onClick={handleSendMessage}
        >
          Send  
        </button>
      </div>
    </div>
    </div>
  );
}

export default Chat;
