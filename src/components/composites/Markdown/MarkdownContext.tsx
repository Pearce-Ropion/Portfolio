import { createContext } from 'utils/context';

export interface MarkdownContext_t {
  inverted?: boolean;
  raw: string;
}

export const [MarkdownProvider, useMarkdownContext] =
  createContext<MarkdownContext_t>('Markdown');
