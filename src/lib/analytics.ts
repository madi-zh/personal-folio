/**
 * Analytics utility functions for tracking custom events
 *
 * Uses Umami's tracking API when available, with graceful fallback.
 * All functions are no-ops if Umami is not loaded.
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

/**
 * Track a custom event
 */
export function trackEvent(
  eventName: string,
  eventData?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(eventName, eventData);
  }
}

/**
 * Track when the chat widget is opened
 */
export function trackChatOpen(): void {
  trackEvent('chat-open');
}

/**
 * Track when a chat message is sent
 */
export function trackChatMessage(): void {
  trackEvent('chat-message');
}

/**
 * Track when a suggested question is clicked
 */
export function trackSuggestionClick(question: string): void {
  trackEvent('suggestion-click', { question });
}

/**
 * Track when a project card is clicked
 */
export function trackProjectClick(projectName: string): void {
  trackEvent('project-click', { project: projectName });
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string): void {
  trackEvent('external-link', { url });
}
