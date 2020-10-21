 //messages
 import { SET_MESSAGES,ADD_MESSAGES} from "../actions";

 const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      const messages = action.payload;
      return messages;

    case ADD_MESSAGES:
      const message = action.payload;
      return [...state, message];
    
      default:
      return state;
  }
};

export default reducer;