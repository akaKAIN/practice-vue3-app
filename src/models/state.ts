import { MessageObject } from '@/utils/error';
import { RequestItem } from '@/models/base';

export interface RootState {
  message: MessageObject | null;
}

export interface AuthState {
  token: string | null;
}

export interface RequestsState {
  requests: RequestItem[] | null;
}
