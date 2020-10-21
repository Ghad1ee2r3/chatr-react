 import axios from "axios";
import instance from "./instance";

 //messages
 import { SET_MESSAGES,ADD_MESSAGES} from "./actionTypes";

 //fetch messages from api
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

  //post messages from api
export const sendMessages = (newMessage,CHANNEL_ID) => async (dispatch) => {
  try {
    const res = await instance.post(`channels/${CHANNEL_ID}/send/`, newMessage);
    const message = res.data;
    dispatch({
      type: ADD_MESSAGES,
      payload: message,
      //channel=channel
    });
  }catch (error) {
    console.error(error);
  }
};