'use client';

import { useState } from 'react';
import { Button } from "./button";
import { Card } from "./card";
import { SendIcon, PaperclipIcon, MicIcon } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Inventory Pro, your inventory management assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "I'm processing your request. As a demo, I can help you with inventory queries, stock levels, and order management.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 p-4">
        <h1 className="text-xl font-semibold text-center text-blue-400">Inventory Pro</h1>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-800 border-gray-700 text-gray-100 shadow-lg shadow-gray-900/30'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' 
                  ? 'text-blue-200 opacity-70' 
                  : 'text-gray-400 opacity-70'
              }`}>
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-800 bg-gray-900 p-4">
        <div className="max-w-4xl mx-auto flex gap-4">
          <div className="flex-1 flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 p-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Message Inventory Pro..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-100 placeholder-gray-400"
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-blue-400"
            >
              <PaperclipIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-blue-400"
            >
              <MicIcon className="h-5 w-5" />
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 shadow-lg shadow-blue-500/20"
          >
            <SendIcon className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-xs text-center text-gray-500 mt-2">
          Inventory Pro can help you manage inventory, track stock levels, and handle orders.
        </p>
      </div>
    </div>
  );
} 