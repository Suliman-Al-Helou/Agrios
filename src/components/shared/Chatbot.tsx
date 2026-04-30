"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoChatbubbleEllipses, IoClose, IoSend } from "react-icons/io5";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hello! I'm Agrios AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: "bot", text: data.text }]);
      } else {
        setMessages((prev) => [...prev, { role: "bot", text: `Error: ${data.error || "Please check your API key."}` }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: "Error connecting to the AI. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#4BAF47] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <IoChatbubbleEllipses size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Agrios Assistant</h3>
                  <p className="text-xs opacity-80">Powered by Gemini AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 transition-colors hover:bg-black/10"
                aria-label="Close chat"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
     {messages.map((msg, idx) => (
  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed
        whitespace-pre-wrap break-words         // ← هاد هو الإصلاح
        ${msg.role === "user"
          ? "bg-[#4BAF47] text-white rounded-br-none"
          : "bg-white text-gray-800 shadow-sm rounded-bl-none ring-1 ring-black/5"
        }`}
    >
      {msg.text}
    </div>
  </div>
))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="border-t bg-white p-4">
              <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2">
                <input
                  type="text"
                  placeholder="Ask Agrios AI..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-transparent text-sm text-gray-800 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="text-[#4BAF47] transition-opacity hover:opacity-80 disabled:opacity-30"
                  aria-label="Send message"
                >
                  <IoSend size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4BAF47] text-white shadow-lg shadow-green-200 transition-colors hover:bg-[#3e913a]"
        aria-label="Toggle chat"
      >
        <IoChatbubbleEllipses size={32} />
      </motion.button>
    </div>
  );
}
