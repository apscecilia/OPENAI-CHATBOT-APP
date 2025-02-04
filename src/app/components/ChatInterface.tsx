import { useChat } from "ai/react";
import { useState } from "react";
import MessageList from "./MessageList";
import InputField from "./InputField";
import ModelSelector from "./ModelSelector";

export default function ChatInterface() {
  const [model, setModel] = useState<"gpt-4" | "gpt-3.5-turbo">(
    () => (localStorage.getItem("aiModel") as "gpt-4" | "gpt-3.5-turbo") || "gpt-3.5-turbo"
  );

  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: "/api/openai/chat",
    body: { model },
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });

  const handleModelChange = (newModel: "gpt-4" | "gpt-3.5-turbo") => {
    setModel(newModel);
    localStorage.setItem("aiModel", newModel);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      <ModelSelector currentModel={model} onModelChange={handleModelChange} />
      <MessageList messages={messages} />
      <div className="border-t pt-4 mt-auto">
        <InputField
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          stop={stop}
        />
      </div>
    </div>
  );
} 