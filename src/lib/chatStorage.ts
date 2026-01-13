import { openDB, type IDBPDatabase } from 'idb';
import type { ChatMessage } from '../types/chat';

const DB_NAME = 'portfolio-chat';
const STORE_NAME = 'messages';
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase> | null = null;

function getDB(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      },
    });
  }
  return dbPromise;
}

export async function getAllMessages(): Promise<ChatMessage[]> {
  const db = await getDB();
  const messages = await db.getAll(STORE_NAME);
  return messages.sort((a, b) => a.timestamp - b.timestamp);
}

export async function addMessage(message: ChatMessage): Promise<void> {
  const db = await getDB();
  await db.put(STORE_NAME, message);
}

export async function clearHistory(): Promise<void> {
  const db = await getDB();
  await db.clear(STORE_NAME);
}

export function generateId(): string {
  return crypto.randomUUID();
}
