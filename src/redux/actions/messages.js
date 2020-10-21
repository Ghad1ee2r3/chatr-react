 import axios from "axios";
import instance from "./instance";

 //messages
 import { SET_MESSAGES} from "./actionTypes";

 export const fetchMessages = (CHANNEL_ID) => async dispatch => {
    try {
      const res = await instance.get(`channels/${CHANNEL_ID}`);
      //const res = await axios.get('http://127.0.0.1:8000/channels/');
      const messages = res.data;
      dispatch({
        type: SET_MESSAGES,
        payload: messages
      });
    } catch (error) {
      console.error(error);
    }
  };