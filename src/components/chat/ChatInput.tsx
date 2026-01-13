import { useState, type FormEvent, type KeyboardEvent } from 'react';

interface Props {
  onSend: (message: string) => void;
  disabled: boolean;
}

export default function ChatInput({ onSend, disabled }: Props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-border">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about Madi..."
        disabled={disabled}
        rows={1}
        className="flex-1 bg-surface text-text-primary text-sm rounded-xl px-4 py-2
                   border border-border focus:border-accent focus:outline-none
                   resize-none disabled:opacity-50 placeholder:text-text-secondary"
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="bg-accent hover:bg-accent-hover text-white rounded-xl px-4 py-2
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </form>
  );
}
