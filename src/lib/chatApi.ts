import type { ChatMessage, ChatRequest } from '../types/chat';

const API_URL = import.meta.env.PUBLIC_CHAT_API_URL || 'http://localhost:8000';

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
