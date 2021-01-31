import { LocationQueryValue } from 'vue-router';

type ErrorMessageCode = 'EMAIL_NOT_FOUND' | 'INVALID_PASSWORD' | 'auth';
type MessageType = 'danger' | 'warning' | 'primary';

export interface MessageObject {
  message: string;
  messageType: MessageType;
}

enum ErrorType {
  EMAIL_NOT_FOUND = 'User with such email was not found',
  INVALID_PASSWORD = 'Your password is invalid.',
  auth = 'Authorization required'
}

export const error = (
  err: string | LocationQueryValue[],
  messageType: MessageType
) => {
  const message = ErrorType[err as ErrorMessageCode]
    ? ErrorType[err as ErrorMessageCode]
    : "Unknown error, let's panic";
  return { message, messageType };
};
