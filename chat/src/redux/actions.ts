import { SET_USERNAME, SEND_MESSAGE, LOGGED_IN } from "./actionTypes";
import { sendMessageType, loggedInType } from "../types";

export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: {
    username,
  },
});

export const sendMessage = (message: sendMessageType) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
  },
});

export const loggedIn = (logged: loggedInType) => ({
  type: LOGGED_IN,
  payload: {
    logged,
  },
});
