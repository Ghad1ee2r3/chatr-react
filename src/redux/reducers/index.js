import { combineReducers } from "redux";

// Reducers
import channelsReducer from "./channels";
import MessagesReducer from "./messages";
import userReducer from "./user";
const rootReducer = combineReducers({
  channels: channelsReducer,
  messages:MessagesReducer,
  user: userReducer
});

export default rootReducer;
