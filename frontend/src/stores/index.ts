import { create } from 'zustand';

import type { StoreApi } from 'zustand';
import type { AuthState } from './auth.store';

import { createAuthStateSlice } from './auth.store';

export type RootState = AuthState;

export type StoreSlice<T> = (
  set: StoreApi<RootState>['setState'],
  get: StoreApi<RootState>['getState']
) => T;

export const useStore = create<RootState>((set, get) => {
  return {
    ...createAuthStateSlice(set, get),
  };
});
