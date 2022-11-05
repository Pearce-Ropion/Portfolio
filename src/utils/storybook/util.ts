export function mkStoryTitle(...segments: string[]): string {
  return segments.filter(Boolean).join('/');
}
