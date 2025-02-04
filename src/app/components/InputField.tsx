'use client';

import { FormEvent } from "react";

interface InputFieldProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  stop: () => void;
}

export default function InputField({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
}: InputFieldProps) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="flex-1 rounded-md border p-2 dark:bg-gray-800"
        rows={1}
      />
      {isLoading ? (
        <button
          onClick={stop}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          type="button"
        >
          Stop
        </button>
      ) : (
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      )}
    </form>
  );
} 