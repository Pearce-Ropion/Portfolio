type ClassNamePrimitives =
  | string
  | number
  | boolean
  | string[]
  | Record<string | number, unknown>
  | null
  | undefined;

type ClassNameCallback<R> = (currentClassName: string) => R;
type ClassNameEntry =
  | ClassNamePrimitives
  | Record<string, ClassNamePrimitives | ClassNameCallback<boolean>>
  | ClassNameCallback<string>;

export const cx = (...classNames: ClassNameEntry[]): string => {
  return classNames
    .reduce<string[]>((acc, entry) => {
      if (typeof entry === 'string') {
        acc.push(entry);
      } else if (typeof entry === 'function') {
        acc.push(entry(acc.join(' ')));
      } else if (Array.isArray(entry)) {
        acc.push(cx(...entry));
      } else if (typeof entry === 'object' && entry !== null) {
        Object.entries(entry)
          .filter(([, value]) => Boolean(value))
          .forEach(([key, value]) => {
            if (typeof value === 'function') {
              if (value(acc.join(' '))) {
                acc.push(key);
              }
            } else {
              acc.push(key);
            }
          });
      }
      return acc;
    }, [])
    .join(' ');
}