import type { StoreApi } from 'zustand';
import { Post, User } from '../types';

export type UserState = {
  posts: Post[];

  setPosts: (posts: Post[]) => void;
};

export const createUserStateSlice = (
  set: StoreApi<UserState>['setState'],
  get: StoreApi<UserState>['getState']
): UserState => ({
  posts: [],

  setPosts: (posts) => set({ posts }),
});
