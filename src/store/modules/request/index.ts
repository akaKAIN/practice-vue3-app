import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RequestsState, RootState } from '@/models/state';

const state: RequestsState = {
  requests: null
};
const getters: GetterTree<RequestsState, RootState> = {
  getRequests: (state: RequestsState) => state.requests
};
const mutations: MutationTree<RequestsState> = {};
const actions: ActionTree<RequestsState, RootState> = {};

const namespaced = true;
export const request: Module<RequestsState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
