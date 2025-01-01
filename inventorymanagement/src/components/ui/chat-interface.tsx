'use client';

import { useState } from 'react';
import { Button } from "./button";
import { SendIcon, Plus, Bot } from "lucide-react";

export function ChatInterface() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Handle message sending here
    setMessage('');
  };

  return (
    <div className="flex flex-col bg-gray-900 rounded-lg border border-gray-800 min-h-[400px]">
      {/* Chat Header */}
      <div className="flex items-center gap-4 p-6 border-b border-gray-800">
        <div className="h-12 w-12 rounded-full bg-blue-600/20 flex items-center justify-center">
          <Bot className="h-7 w-7 text-blue-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-200 font-semibold text-lg">Lumen</span>
          <span className="text-gray-400 text-sm">AI Assistant</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto text-gray-400 hover:text-gray-200"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      {/* Empty Chat Space */}
      <div className="flex-1"></div>

      {/* Message Input */}
      <div className="p-6 border-t border-gray-800">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 text-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-700 text-base"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md"
          >
            <SendIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 