import { AuthState } from '@/models/state';
import { JWT_TOKEN } from '@/store/modules/auth/index';

const getItem: () => string | null = () => localStorage.getItem(JWT_TOKEN);

export const state: AuthState = {
  token: getItem()
};
