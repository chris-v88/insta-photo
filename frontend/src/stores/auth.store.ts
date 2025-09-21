import type { StoreApi } from 'zustand';
import { User } from '../types';

export type AuthState = {
  isAuthenticated: boolean;

  setIsAuthenticated: (isAuth: boolean) => void;
  setLogin: (user: User) => void;
  setLogout: () => void;
};

export const createAuthStateSlice = (
  set: StoreApi<any>['setState'],
  get: StoreApi<any>['getState']
): AuthState => ({
  isAuthenticated: false,

  setIsAuthenticated: (isAuth) => set({ isAuthenticated: isAuth }),
  setLogin: (user) => {
    set({ isAuthenticated: true });
    get().setUser(user);
  },
  setLogout: () => {
    set({ isAuthenticated: false });
    get().setUser(null);
  },
});
