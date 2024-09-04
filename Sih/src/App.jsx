// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Gallery from './components/Gallery';
import Chat from './components/chat';
import './App.css'; // Tailwind CSS import
import ChatbotEmbed from './components/chatbotembed';
import Navbar from './components/navbar';
import Sigin from './components/signin';
import Signup from './components/signup';
function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatbot" element={<ChatbotEmbed />} />
        <Route path="/signin" element={<Sigin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
