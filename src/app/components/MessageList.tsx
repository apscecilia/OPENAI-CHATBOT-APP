import { Message } from "ai";
import ReactMarkdown from "react-markdown";
import { Copy } from "lucide-react";

export default function MessageList({ messages }: { messages: Message[] }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex-1 overflow-y-auto space-y-4 p-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[80%] rounded-lg p-4 ${
              message.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <div className="flex justify-between items-start gap-2">
              <ReactMarkdown className="prose dark:prose-invert max-w-none">
                {message.content}
              </ReactMarkdown>
              <button
                onClick={() => copyToClipboard(message.content)}
                className="opacity-50 hover:opacity-100"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 