export type sendMessageType = { username: string; message: string };

export type receiveMessageType = {
  username: string;
  message: string;
  datetime: string;
  type: string;
};

export type loggedInType = {
  username: string;
  type: string;
};
