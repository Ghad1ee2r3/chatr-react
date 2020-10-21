 //messages
 import { SET_MESSAGES} from "../actions";

 const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      const messages = action.payload;
      return messages;

    default:
      return state;
  }
};

export default reducer;