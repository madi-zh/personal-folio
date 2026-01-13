import Markdown from 'react-markdown';
import type { ChatMessage as ChatMessageType } from '../../types/chat';

interface Props {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser
            ? 'bg-accent text-white rounded-br-md'
            : 'bg-surface text-text-primary rounded-bl-md'
        }`}
      >
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="text-sm">
            <Markdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                h1: ({ children }) => <h1 className="text-base font-bold mb-2">{children}</h1>,
                h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
                code: ({ children }) => (
                  <code className="bg-background/50 px-1 py-0.5 rounded text-xs">{children}</code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-background/50 p-2 rounded text-xs overflow-x-auto mb-2">{children}</pre>
                ),
              }}
            >
              {message.content}
            </Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
