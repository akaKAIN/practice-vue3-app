import { ActionContext, Commit } from 'vuex';
import axios from 'axios';
import { LoginInfo } from '@/models/base';
import { error } from '@/utils/error';

const JWT_TOKEN = 'jwt-token';

type AuthState

type s = { token: string | null };

const auth = {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(JWT_TOKEN)
    };
  },
  getters: {
    token: (state: s) => state.token,
    isAuthenticated: (state: s) => !!state.token
  },
  mutations: {
    setToken(state: s, token: string): void {
      state.token = token;
      localStorage.setItem(JWT_TOKEN, token);
    },
    logout(state: s): void {
      state.token = null;
      localStorage.removeItem(JWT_TOKEN);
    }
  },
  actions: {
    async login({ commit }: ActionContext<Commit, string>, payload: LoginInfo) {
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
  }
};

export default auth;
