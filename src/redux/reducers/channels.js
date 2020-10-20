import { SET_CHANNELS, ADD_CHANNEL  } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS :
      const channels = action.payload;
      return channels;

    case ADD_CHANNEL:
      const newChannel = action.payload;
      return [newChannel, ...state];

    default:
      return state;
  }
};

export default reducer;
