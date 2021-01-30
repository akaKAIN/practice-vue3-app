import { createStore, createLogger } from 'vuex';
import { auth } from '@/store/modules/auth';
import { RootState } from '@/models/state';

const plugins = [];

if (process.env.NODE_ENV == 'development') {
  plugins.push(createLogger());
}
export default createStore<RootState>({
  plugins,
  state() {
    return {
      message: null
    };
  },
  mutations: {},
  actions: {},
  modules: { auth }
});
