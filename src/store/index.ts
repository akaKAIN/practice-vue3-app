import { createStore, createLogger, ActionContext } from 'vuex';
import { auth } from '@/store/modules/auth';
import { AuthState, RootState } from '@/models/state';
import { MessageObject } from '@/utils/error';

type commit = ActionContext<AuthState, RootState>;

const plugins = [];

if (process.env.NODE_ENV == 'development') {
  plugins.push(createLogger());
}
export default createStore<RootState>({
  plugins,
  state: { message: null },
  getters: { message: state => state.message },
  mutations: {
    setMessage: (state: RootState, message: MessageObject) =>
      (state.message = message),
    clearMessage: (state: RootState) => (state.message = null)
  },
  actions: {
    setMessage: ({ commit }, message: MessageObject) => {
      commit('setMessage', message);
      setTimeout(() => commit('clearMessage', null), 5000);
    },
    clearMessage: ({ commit }) => commit('clearMessage')
  },
  modules: { auth }
});
