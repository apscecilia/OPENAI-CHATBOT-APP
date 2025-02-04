'use client';

interface ModelSelectorProps {
  currentModel: "gpt-4" | "gpt-3.5-turbo";
  onModelChange: (model: "gpt-4" | "gpt-3.5-turbo") => void;
}

export default function ModelSelector({ currentModel, onModelChange }: ModelSelectorProps) {
  return (
    <div className="mb-4">
      <select
        value={currentModel}
        onChange={(e) => onModelChange(e.target.value as "gpt-4" | "gpt-3.5-turbo")}
        className="p-2 rounded-md border dark:bg-gray-800"
      >
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4">GPT-4</option>
      </select>
    </div>
  );
} 