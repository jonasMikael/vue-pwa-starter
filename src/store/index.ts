import * as menu from '@/modules/menu/store';


import Vue from 'vue';
import Vuex from 'vuex';
import * as root from './root';
import { menuStorage, StateMenu } from '@/modules/menu/store';

Vue.use(Vuex);

interface ModulesStates {
  menu: StateMenu;
}

export type AllStates = root.State & ModulesStates;
export type RootState = root.State;

export default new Vuex.Store<RootState>({
  state: root.state(),
  getters: root.getters,
  mutations: root.mutations,
  actions: root.actions,
  modules: {
    [menu.name]: menuStorage
  }
});
