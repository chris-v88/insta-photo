import type { StoreApi } from 'zustand';
import { User } from '../types';

export type UserState = {
  user: User | null;

  setUser: (user: User | null) => void;
};

export const createUserStateSlice = (
  set: StoreApi<UserState>['setState'],
  get: StoreApi<UserState>['getState']
): UserState => ({
  user: null,

  setUser: (user) => set({ user }),
});
