import { SEND_MESSAGE, LOGGED_IN } from "../actionTypes";

const initialState = {
  messages: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { message } = action.payload;
      return {
        ...state,
        messages: [...state.messages, message],
      };
    }
    case LOGGED_IN: {
      const { logged } = action.payload;
      return {
        ...state,
        messages: [...state.messages, logged],
      };
    }
    default:
      return state;
  }
};
