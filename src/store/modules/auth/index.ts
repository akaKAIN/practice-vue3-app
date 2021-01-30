import { AuthState, RootState } from '@/models/state';
import { Module } from 'vuex';
import { getters } from '@/store/modules/auth/getters';
import { mutations } from '@/store/modules/auth/mutations';
import { actions } from '@/store/modules/auth/actions';
import { state } from '@/store/modules/auth/state';

export const JWT_TOKEN = 'jwt-token';

const namespaced = true;

export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
