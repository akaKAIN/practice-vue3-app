type ErrorMessageCode = 'EMAIL_NOT_FOUND' | 'INVALID_PASSWORD';
type MessageType = 'danger' | 'warning' | 'primary'

export interface MessageObject {
  message: string;
  messageType: MessageType;
}

const response = {
  response: { data: { error: { message: '' } } }
};

type FirebaseLoginResponseError = typeof response;

enum ErrorType {
  EMAIL_NOT_FOUND = 'User with such email was not found',
  INVALID_PASSWORD = 'Your password is invalid.'
}

export const error = (err: FirebaseLoginResponseError, messageType: MessageType) => {
  const message =  ErrorType[err.response.data.error.message as ErrorMessageCode]
    ? ErrorType[err.response.data.error.message as ErrorMessageCode]
    : "Unknown error, let's panic";
  return { message, messageType }
};
