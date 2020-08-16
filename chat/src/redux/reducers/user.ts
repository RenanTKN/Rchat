import { SET_USERNAME } from "../actionTypes";

const initialState = {
  user: {
    username: "",
    color: "#000",
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERNAME: {
      const { username } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          username,
        },
      };
    }
    default:
      return state;
  }
};
