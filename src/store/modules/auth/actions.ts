import { ActionTree } from 'vuex';
import { AuthState, RootState } from '@/models/state';
import axios from 'axios';
import { LoginInfo } from '@/models/base';
import { error } from '@/utils/error';

export const actions: ActionTree<AuthState, RootState> = {
  async login({ commit }, payload: LoginInfo) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_KEY}`;
    try {
      const response = await axios.post(url, {
        ...payload,
        returnSecureToken: true
      });
      const token: string = response.data.idToken;
      commit('setToken', token);
    } catch (err) {
      console.log(error(err));
    }
  }
};
