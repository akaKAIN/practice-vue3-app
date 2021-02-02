export interface LoginInfo {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface SelectOption {
  id: number;
  name: string;
}

export interface RequestItem {
  id: string;
  date: string;
  position: number;
  amount: number;
}
