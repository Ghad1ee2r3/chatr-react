import { combineReducers } from "redux";

// Reducers
import channelsReducer from "./channels";
import userReducer from "./user";
const rootReducer = combineReducers({
  channels: channelsReducer,
  
  user: userReducer
});

export default rootReducer;
