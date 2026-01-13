export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatRequest {
  message: string;
  history: { role: string; content: string }[];
}

export interface ChatResponse {
  response: string;
}
