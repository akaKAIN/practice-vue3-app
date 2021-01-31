import { MessageObject } from '@/utils/error';

export interface RootState {
  message: MessageObject | null;
}

export interface AuthState {
  token: string | null;
}
