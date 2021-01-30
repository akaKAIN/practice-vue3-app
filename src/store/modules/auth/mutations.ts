import { MutationTree } from 'vuex';
import { AuthState } from '@/models/state';
import { JWT_TOKEN } from '@/store/modules/auth/index';

export const mutations: MutationTree<AuthState> = {
  setToken(state, token: string): void {
    state.token = token;
    localStorage.setItem(JWT_TOKEN, token);
  },
  logout(state): void {
    state.token = null;
    localStorage.removeItem(JWT_TOKEN);
  }
};
