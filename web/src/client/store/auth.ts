import { create } from 'zustand';
import { api } from '../lib/api';
import type { User } from '../../shared/types';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  checkAuth: () => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, displayName: string) => Promise<boolean>;
  loginWithGoogle: (credential: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (updates: { displayName?: string; avatarUrl?: string | null }) => Promise<boolean>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  error: null,

  checkAuth: async () => {
    try {
      set({ loading: true });
      const response = await api.get('/auth/me');
      if (response.success && response.data?.user) {
        set({ user: response.data.user, loading: false, error: null });
      } else {
        set({ user: null, loading: false, error: null });
      }
    } catch {
      set({ user: null, loading: false, error: null });
    }
  },

  login: async (email: string, password: string) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post('/auth/login', { email, password });
      if (response.success && response.data?.user) {
        set({ user: response.data.user, loading: false });
        return true;
      } else {
        set({ loading: false, error: response.error || 'Login failed' });
        return false;
      }
    } catch (err) {
      set({ loading: false, error: 'Login failed' });
      return false;
    }
  },

  signup: async (email: string, password: string, displayName: string) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post('/auth/signup', { email, password, displayName });
      if (response.success && response.data?.user) {
        set({ user: response.data.user, loading: false });
        return true;
      } else {
        set({ loading: false, error: response.error || 'Signup failed' });
        return false;
      }
    } catch (err) {
      set({ loading: false, error: 'Signup failed' });
      return false;
    }
  },

  loginWithGoogle: async (credential: string) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post('/auth/google', { credential });
      if (response.success && response.data?.user) {
        set({ user: response.data.user, loading: false });
        return true;
      } else {
        set({ loading: false, error: response.error || 'Google login failed' });
        return false;
      }
    } catch (err) {
      set({ loading: false, error: 'Google login failed' });
      return false;
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
    } finally {
      set({ user: null, loading: false, error: null });
    }
  },

  updateProfile: async (updates) => {
    try {
      const response = await api.patch('/auth/me', updates);
      if (response.success && response.data?.user) {
        set({ user: response.data.user });
        return true;
      }
      return false;
    } catch {
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));
