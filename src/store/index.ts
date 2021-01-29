import { createStore, createLogger, Store } from 'vuex';
import { InjectionKey } from 'vue';
import auth from '@/store/modules/auth.module.ts';

const plugins = [];

if (process.env.NODE_ENV == 'development') {
  plugins.push(createLogger());
}

export interface RootState {
  message?: string | null;
}

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol();

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
