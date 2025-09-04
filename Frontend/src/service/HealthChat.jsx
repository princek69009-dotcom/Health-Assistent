import { useEffect, useRef, useState } from "react";
import { FaRobot, FaUser, FaPaperPlane, FaCircleNotch } from "react-icons/fa";
import axios from "axios";

const initialMessages = [
  {
    id: "m1",
    role: "assistant",
    content:
      "👋 Hi! I’m your Health Assistant. Ask me anything about diet, exercise, sleep, hydration, or BMI.",
  },
];

export default function HealthChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/ai/ask", {
        question: text,
      });

      const botMsg = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: res.data.answer ?? "Sorry, I couldn’t generate a response.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errMsg = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "⚠️ Oops, the server is not responding right now. Please try again.",
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-blue-100 via-emerald-50 to-blue-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-4 shadow flex flex-col">
        <h1 className="text-xl md:text-2xl font-extrabold flex items-center gap-2">
          <FaRobot className="text-yellow-300" /> Health Assistant
        </h1>
        <p className="text-sm text-white/90">Your AI wellness companion 💙</p>
      </div>

      {/* Messages */}
      <div
        ref={listRef}
        className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-4 bg-transparent"
        aria-live="polite"
      >
        {messages.map((m) => (
          <ChatBubble key={m.id} role={m.role} content={m.content} />
        ))}
        {loading && <TypingBubble />}
      </div>

      {/* Composer */}
      <div className="border-t border-gray-200 p-4 bg-white/90 backdrop-blur-md">
        <div className="flex items-end gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder="Ask about diet, workouts, hydration, sleep..."
            className="flex-1 resize-none rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-3 shadow-sm bg-white"
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold shadow-lg
                       text-white bg-gradient-to-r from-blue-600 to-emerald-500
                       disabled:opacity-60 hover:scale-105 hover:brightness-110 transition"
          >
            {loading ? <FaCircleNotch className="animate-spin" /> : <FaPaperPlane />}
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="shrink-0 mt-1 h-9 w-9 rounded-full bg-blue-600 text-white grid place-items-center shadow">
          <FaRobot />
        </div>
      )}

      <div
        className={`max-w-[80%] md:max-w-[70%] px-5 py-3 rounded-2xl shadow-md
          ${isUser
            ? "bg-gradient-to-br from-blue-600 to-emerald-500 text-white rounded-tr-sm"
            : "bg-white border border-gray-200 text-gray-800 rounded-tl-sm"
          }`}
      >
        <p className="leading-relaxed whitespace-pre-line">{content}</p>
      </div>

      {isUser && (
        <div className="shrink-0 mt-1 h-9 w-9 rounded-full bg-emerald-500 text-white grid place-items-center shadow">
          <FaUser />
        </div>
      )}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 mt-1 h-9 w-9 rounded-full bg-blue-600 text-white grid place-items-center shadow">
        <FaRobot />
      </div>
      <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 shadow">
        <div className="flex items-center gap-1">
          <Dot /> <Dot delay="150ms" /> <Dot delay="300ms" />
        </div>
      </div>
    </div>
  );
}

function Dot({ delay = "0ms" }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-pulse"
      style={{ animationDelay: delay }}
    />
  );
}
