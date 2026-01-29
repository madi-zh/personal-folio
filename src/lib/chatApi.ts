import type { ChatMessage, ChatRequest } from '../types/chat';

const API_URL = import.meta.env.PUBLIC_CHAT_API_URL || 'http://localhost:8000';

const SUGGESTIONS_CACHE_KEY = 'portfolio_chat_suggestions';
const SUGGESTIONS_CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

interface CachedSuggestions {
  suggestions: string[];
  timestamp: number;
}

export async function fetchSuggestions(): Promise<string[]> {
  // Check cache first
  try {
    const cached = localStorage.getItem(SUGGESTIONS_CACHE_KEY);
    if (cached) {
      const { suggestions, timestamp }: CachedSuggestions = JSON.parse(cached);
      if (Date.now() - timestamp < SUGGESTIONS_CACHE_TTL) {
        return suggestions;
      }
    }
  } catch {
    // Cache read failed, continue to fetch
  }

  // Fetch from API
  try {
    const response = await fetch(`${API_URL}/suggestions`);
    if (!response.ok) {
      throw new Error('Failed to fetch suggestions');
    }
    const data = await response.json();
    const suggestions = data.suggestions as string[];

    // Cache the result
    try {
      localStorage.setItem(
        SUGGESTIONS_CACHE_KEY,
        JSON.stringify({ suggestions, timestamp: Date.now() })
      );
    } catch {
      // Cache write failed, ignore
    }

    return suggestions;
  } catch {
    // Return empty array on error, component will use fallback
    return [];
  }
}

export async function sendMessageStream(
  message: string,
  history: ChatMessage[],
  onToken: (token: string) => void
): Promise<void> {
  const request: ChatRequest = {
    message,
    history: history.map((msg) => ({
      role: msg.role,
      content: msg.content,
    })),
  };

  const response = await fetch(`${API_URL}/chat/stream`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('Too many requests. Please wait a moment and try again.');
    }
    throw new Error('Failed to get response. Please try again.');
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error('Failed to read response stream.');
  }

  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const lines = chunk.split('\n');

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        if (data === '[DONE]') break;
        try {
          const parsed = JSON.parse(data);
          if (parsed.token) {
            onToken(parsed.token);
          }
        } catch {
          // Skip malformed JSON
        }
      }
    }
  }
}
