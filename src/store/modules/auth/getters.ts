import { GetterTree } from 'vuex';
import { AuthState, RootState } from '@/models/state';
import {JWT_TOKEN} from "@/store/modules/auth/index";

export const getters: GetterTree<AuthState, RootState> = {
  token: (state): string | null => {
    console.log(localStorage.getItem(JWT_TOKEN))
    return state.token
  },
  isAuthenticated: (state): boolean => !!state.token
};
