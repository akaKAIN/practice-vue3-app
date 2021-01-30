import { GetterTree } from 'vuex';
import { AuthState, RootState } from '@/models/state';

export const getters: GetterTree<AuthState, RootState> = {
  token: (state): string | null => state.token,
  isAuthenticated: (state): boolean => !!state.token
};
