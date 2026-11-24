import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Minus, Bot, User, ChevronDown, ExternalLink } from 'lucide-react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am your itethik Assistant. How can I help you today?', timestamp: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || (
        import.meta.env.PROD
          ? 'https://itethik-backend-1.onrender.com'
          : 'http://localhost:5000'
      );
      const response = await fetch(`${apiBaseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: data.reply || "I'm having trouble connecting. Please try again or contact us on WhatsApp.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch {
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: "It seems the agent is offline. Please reach out to us via WhatsApp for immediate assistance.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickActions = [
    "Laptop repair cost?",
    "CCTV camera setup?",
    "Custom PC quote?",
    "Website design?",
    "Book a free visit"
  ];

  const handleQuickAction = (action) => {
    setInput(action);
  };

  const renderText = (text) => {
    return text.split(/(https?:\/\/[^\s]+)/g).map((part, i) => {
      if (/(https?:\/\/[^\s]+)/.test(part)) {
        let href = part;
        let suffix = "";
        if (/[.,;:]$/.test(part)) {
          suffix = part.slice(-1);
          href = part.slice(0, -1);
        }
        return (
          <React.Fragment key={i}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-white transition inline-flex items-center gap-1">
              {href} <ExternalLink size={12} />
            </a>
            {suffix}
          </React.Fragment>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`fixed bottom-8 right-8 z-[9999] w-20 h-20 rounded-full bg-[#020617] border border-cyan-500/30 flex items-center justify-center cursor-pointer overflow-hidden group ${isOpen ? 'hidden' : ''}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:opacity-100 opacity-50 transition-opacity"></div>
        <div className="absolute inset-0 animate-pulse bg-cyan-400/10 blur-xl"></div>
        <motion.div
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="z-10"
        >
          <img src="/assistant-logo.jpg" alt="Assistant" className="w-12 h-12 object-contain" />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? '64px' : '550px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className={`fixed bottom-8 right-8 z-[9999] w-[380px] max-w-[calc(100vw-40px)] bg-glass-strong border border-cyan-500/20 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col`}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#020617] to-[#0a0f2c] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    y: [0, -4, 0]
                  }}
                  transition={{
                    scale: { type: 'spring', damping: 12 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                >
                  <img src="/assistant-logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">itethik Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition"
                >
                  {isMinimized ? <ChevronDown size={18} /> : <Minus size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-gray-400 transition"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center border ${msg.type === 'user' ? 'bg-purple-600/20 border-purple-500/30 text-purple-400' : 'bg-cyan-600/20 border-cyan-500/30 text-cyan-400'}`}>
                          {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.type === 'user' ? 'bg-purple-600 text-white rounded-tr-none shadow-[0_4px_15px_rgba(168,85,247,0.2)]' : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none shadow-lg'}`}>
                          {renderText(msg.text)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex gap-3 max-w-[85%]">
                        <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center border bg-cyan-600/20 border-cyan-500/30 text-cyan-400">
                          <Bot size={16} />
                        </div>
                        <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Footer / Input */}
                <div className="p-4 bg-white/5 border-t border-white/5">
                  {/* Quick Actions */}
                  {messages.length < 3 && !isTyping && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {quickActions.map((action, i) => (
                        <button
                          key={i}
                          onClick={() => handleQuickAction(action)}
                          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 items-center bg-navy border border-white/10 p-1.5 rounded-xl focus-within:border-cyan-500/50 transition-all">
                    <input
                      type="text"
                      placeholder="Ask itethik Assistant..."
                      className="flex-1 bg-transparent border-none outline-none text-white text-sm px-3 py-2"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                      onClick={handleSend}
                      disabled={isTyping || !input.trim()}
                      className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white disabled:opacity-50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;
