import { useState, useEffect } from 'react';
import { fetchSuggestions } from '../../lib/chatApi';

interface Props {
  onSelect: (question: string) => void;
}

const FALLBACK_SUGGESTIONS = [
  "What are Madi's skills?",
  "Tell me about his experience",
  "What projects has he worked on?",
  "How can I contact Madi?",
];

export default function SuggestedQuestions({ onSelect }: Props) {
  const [suggestions, setSuggestions] = useState<string[]>(FALLBACK_SUGGESTIONS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSuggestions() {
      setIsLoading(true);
      const fetched = await fetchSuggestions();
      if (fetched.length > 0) {
        setSuggestions(fetched);
      }
      setIsLoading(false);
    }
    loadSuggestions();
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-text-secondary text-xs text-center">
        Try asking:
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {suggestions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            disabled={isLoading}
            className="text-xs px-3 py-1.5 rounded-full border border-border
                       text-text-secondary hover:text-accent hover:border-accent
                       transition-colors disabled:opacity-50"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
