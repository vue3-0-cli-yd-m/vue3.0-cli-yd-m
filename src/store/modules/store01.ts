import type {
  GetterTree, MutationTree, ActionTree, Module,
} from 'vuex';

export interface UserState { }

const state = (): UserState => ({});

export const getters: GetterTree<UserState, any> = {};

export const mutations: MutationTree<UserState> = {};

export const actions: ActionTree<UserState, any> = {};

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
} as Module<UserState, any>;
