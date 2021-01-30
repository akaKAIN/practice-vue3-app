import { AuthState } from '@/models/state';
import { JWT_TOKEN } from '@/store/modules/auth/index';

export const state: AuthState = {
  token: localStorage.getItem(JWT_TOKEN)
};
