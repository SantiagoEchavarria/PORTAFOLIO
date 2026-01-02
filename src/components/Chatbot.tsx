import { useEffect, useRef, useState } from "react";

const CHATBOT_URL =
  "https://n8n.srv1227621.hstgr.cloud/webhook/chatbot";

type Message = {
  from: "user" | "bot";
  text: string;
};

export default function ChatbotBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Sesión persistente
  const [sessionId] = useState(() => {
    const existing = localStorage.getItem("chatbot-session");
    if (existing) return existing;

    const id = crypto.randomUUID();
    localStorage.setItem("chatbot-session", id);
    return id;
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

 async function sendMessage() {
  if (!input.trim() || loading) return;

  const userMessage = input.trim();
  setInput("");
  setMessages((m) => [...m, { from: "user", text: userMessage }]);
  setLoading(true);

  try {
    const res = await fetch(CHATBOT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId,
        message: userMessage,
      }),
    });

    const raw = await res.text();
    console.log("RAW RESPONSE:", raw);

    const lines = raw
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    let reply = "";

    for (let i = lines.length - 1; i >= 0; i--) {
      try {
        const parsed = JSON.parse(lines[i]);

        if (
          parsed.type === "item" &&
          typeof parsed.content === "string" &&
          parsed.content.includes('"reply"')
        ) {
          const inner = JSON.parse(parsed.content);
          if (inner.reply) {
            reply = inner.reply;
            break;
          }
        }
      } catch {
        continue;
      }
    }

    setMessages((m) => [
      ...m,
      {
        from: "bot",
        text: reply || "Respuesta vacía del bot",
      },
    ]);
  } catch (err) {
    console.error("ERROR FETCH:", err);
    setMessages((m) => [
      ...m,
      {
        from: "bot",
        text: "❌ Error de conexión con el servidor",
      },
    ]);
  } finally {
    setLoading(false);
  }
}


  return (
    <>
      {/* Burbuja */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "none",
          background: "#2563eb",
          color: "white",
          fontSize: 24,
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 320,
            height: 420,
            background: "white",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              padding: 12,
              background: "#2563eb",
              color: "white",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            ¿Tienes alguna pregunta sobre mí?
          </div>

          <div
            style={{
              flex: 1,
              padding: 10,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  background:
                    m.from === "user" ? "#2563eb" : "#e5e7eb",
                  color: m.from === "user" ? "white" : "black",
                  padding: "8px 12px",
                  borderRadius: 12,
                  maxWidth: "80%",
                }}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div style={{ fontSize: 12, color: "#666" }}>
                Escribiendo…
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div
            style={{
              display: "flex",
              padding: 8,
              borderTop: "1px solid #ddd",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Escribe un mensaje..."
              disabled={loading}
              style={{
                flex: 1,
                padding: 8,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              style={{
                marginLeft: 6,
                padding: "0 12px",
                borderRadius: 8,
                border: "none",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
