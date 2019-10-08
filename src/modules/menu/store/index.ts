import { Module } from 'vuex';
import { state, StateMenu } from '@/modules/menu/store/state';
import { RootState } from '@/store/index';
import { actions } from '@/modules/menu/store/actions';
import { mutations } from '@/modules/menu/store/mutations';

export * from '@/modules/menu/store/state';
//export * from '@/modules/menu/store/types';

export const name = 'menu';

export const menuStorage: Module<StateMenu, RootState> = {
  actions,
  state,
  mutations
};
