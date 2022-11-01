// import { mapValues } from 'lodash-es';
import create, {
  GetState,
  SetState,
  State,
  StateCreator,
  StoreApi,
  UseBoundStore,
} from 'zustand';
import { devtools } from 'zustand/middleware';

export interface StoreState extends State {
  [slice: string]: unknown;
}

export const createStore = <S extends StoreState>(
  name: string,
  storeFn: StateCreator<S>,
): UseBoundStore<S> => {
  return create<S>(
    devtools<S, SetState<S>, GetState<S>, StoreApi<S>>(storeFn, { name }),
  );
};

export type Selectors<S extends StoreState> = {
  [key in keyof S]: (state: S) => S[key];
};

export const createSelectors = <S extends StoreState>(
  store: UseBoundStore<S>,
): Selectors<S> => {
  const keys = Object.keys(store.getState()) as Array<keyof S>;
  const selectors: Partial<Selectors<S>> = {};

  keys.forEach(key => {
    selectors[key] = state => state[key];
  });

  return selectors as Selectors<S>;
};
