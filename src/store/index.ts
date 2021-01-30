import { createStore, createLogger } from 'vuex';
import { auth } from '@/store/modules/auth';
import { RootState } from '@/models/state';
import {MessageObject} from "@/utils/error";

const plugins = [];

if (process.env.NODE_ENV == 'development') {
  plugins.push(createLogger());
}
export default createStore<RootState>({
  plugins,
  state: { message: null},
  getters: { message: state => state.message },
  mutations: {
    setMessage: (state, message: MessageObject) => {
      state.message = message;
      // setTimeout(() => (state.message = null), 5000);
    }
  },
  actions: {
    setMessage: () => ({ commit }: any, message: MessageObject) =>
      commit('setMessage', message)
  },
  modules: { auth }
});
