export class UnreachableCaseError extends Error {
  constructor(message?: string, value?: unknown) {
    value !== undefined
      ? super(`${message}: ${JSON.stringify(value)}`)
      : super(message);
  }
}
