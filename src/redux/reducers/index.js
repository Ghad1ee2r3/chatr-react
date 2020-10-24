import { combineReducers } from "redux";

// Reducers
import channelsReducer from "./channels";
import MessagesReducer from "./messages";
import userReducer from "./user";
import errorsReducer from "./errors";
const rootReducer = combineReducers({
  channels: channelsReducer,
  messages: MessagesReducer,
  user: userReducer,
  errorsState: errorsReducer,
});

export default rootReducer;
