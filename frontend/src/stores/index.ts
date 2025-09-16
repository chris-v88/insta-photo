import { create } from 'zustand';

import type { StoreApi } from 'zustand';
import type { AuthState } from './auth.store';

import { createAuthStateSlice } from './auth.store';
import { createUserStateSlice, UserState } from './user.store';
import { createPostStateSlice, PostState } from './post.store';

export type RootState = AuthState & UserState & PostState;

export type StoreSlice<T> = (
  set: StoreApi<RootState>['setState'],
  get: StoreApi<RootState>['getState']
) => T;

export const useStore = create<RootState>((set, get) => {
  return {
    ...createAuthStateSlice(set, get),
    ...createUserStateSlice(set, get),
    ...createPostStateSlice(set, get),
  };
});
