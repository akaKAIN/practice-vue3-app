import { GetterTree } from 'vuex';
import { AuthState, RootState } from '@/models/state';

export const getters: GetterTree<AuthState, RootState> = {
  token: (state: AuthState): string | null => state.token,
  isAuthenticated: (state: AuthState): boolean => !!state.token
};
