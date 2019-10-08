import { RootState } from '@/store/index';
import { ActionContext, ActionTree } from 'vuex';
import { StateMenu } from './state';


type action = (context: ActionContext<StateMenu, RootState>, payload: any) => void

export interface Actions extends ActionTree<StateMenu, RootState> {
}

export const actions: Actions = {
};
