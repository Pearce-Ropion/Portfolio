export type Nullable_t<T> = T | null;
export type Optional_t<T> = T | undefined;
export type Maybe_t<T> = Nullable_t<T> | Optional_t<T>;

export type KeyOf_t<T extends object> = keyof T;
export type ValueOf_t<T extends object> = T[keyof T];

export type ExtractValid_t<T, U extends T> = Extract<T, U>;
export type ExcludeValid_t<T, U extends T> = Exclude<T, U>;
export type PickValid_t<T, U extends keyof T> = Pick<T, U>;
export type OmitValid_t<T, U extends keyof T> = Omit<T, U>;
