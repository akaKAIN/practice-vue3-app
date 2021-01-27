import { ActionContext, Commit } from 'vuex';

const JWT_TOKEN = 'jwt-token';

const auth = {
  namespace: true,
  state() {
    return {
      token: null
    };
  },
  getters: {
    token: state => state.token,
    isAuthenticated: state => !!state.token
  },
  mutations: {
    setToken(state, token: string): void {
      state.token = token;
      localStorage.setItem(JWT_TOKEN, token);
    },
    logout(state): void {
      state.token = null;
      localStorage.removeItem(JWT_TOKEN);
    }
  },
  actions: {
    login({ commit }: ActionContext<Commit, string>): void {
      commit('setToken', new Date().toLocaleTimeString());
    }
  }
};

export default auth;
