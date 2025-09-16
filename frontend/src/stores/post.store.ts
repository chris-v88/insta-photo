import type { StoreApi } from 'zustand';
import { Post } from '../types';

export type PostState = {
  posts: Post[];

  setPosts: (posts: Post[]) => void;
};

export const createPostStateSlice = (
  set: StoreApi<PostState>['setState'],
  get: StoreApi<PostState>['getState']
): PostState => ({
  posts: [],

  setPosts: (posts) => set({ posts }),
});
