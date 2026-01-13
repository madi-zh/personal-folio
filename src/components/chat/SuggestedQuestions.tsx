interface Props {
  onSelect: (question: string) => void;
}

const SUGGESTIONS = [
  "What are Madi's skills?",
  "Tell me about his experience",
  "What projects has he worked on?",
  "How can I contact Madi?",
];

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-text-secondary text-xs text-center">
        Try asking:
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {SUGGESTIONS.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="text-xs px-3 py-1.5 rounded-full border border-border
                       text-text-secondary hover:text-accent hover:border-accent
                       transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
