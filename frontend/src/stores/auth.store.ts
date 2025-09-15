import { User } from '../types';
import type { StoreApi } from 'zustand';

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;

  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuth: boolean) => void;
  setLogin: (user: User) => void;
  setLogout: () => void;
};

export const createAuthStateSlice = (
  set: StoreApi<AuthState>['setState'],
  get: StoreApi<AuthState>['getState']
): AuthState => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuth) => set({ isAuthenticated: isAuth }),
  setLogin: (user) => {
    set({ user, isAuthenticated: true });
  },
  setLogout: () => set({ user: null, isAuthenticated: false }),
});
