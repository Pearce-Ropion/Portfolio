export type Nullable_t<T> = T | null;
export type Optional_t<T> = T | undefined;
export type Maybe_t<T> = Nullable_t<T> | Optional_t<T>;

export type KeyOf_t<T extends object> = keyof T;
export type ValueOf_t<T extends object> = T[keyof T];
