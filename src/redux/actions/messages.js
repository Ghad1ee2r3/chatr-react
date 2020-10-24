import instance from "./instance";

//messages
import { SET_MESSAGES, ADD_MESSAGES } from "./actionTypes";

//fetch messages from api
export const fetchMessages = (CHANNEL_ID) => async (dispatch) => {
  try {
    const res = await instance.get(`channels/${CHANNEL_ID}`);
    const messages = res.data;
    dispatch({
      type: SET_MESSAGES,
      payload: messages,
    });
  } catch (error) {
    console.error(error);
  }
};

let timer = null;
export const setChannel = (CHANNEL_ID) => async (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(fetchMessages(CHANNEL_ID)), 5000);
  dispatch(fetchMessages(CHANNEL_ID));
};

export const fetchNewMessages = (CHANNEL_ID, latest) => async (dispatch) => {
  try {
    const res = await instance.get(`channels/${CHANNEL_ID}/?latest=${latest}`);
    const messages = res.data;
    dispatch({
      type: SET_MESSAGES,
      payload: messages,
    });
  } catch (error) {
    console.error(error);
  }
};

//post messages from api
export const sendMessages = (newMessage, CHANNEL_ID) => async (dispatch) => {
  try {
    const res = await instance.post(`channels/${CHANNEL_ID}/send/`, newMessage);
    const message = res.data;
    dispatch({
      type: ADD_MESSAGES,
      payload: message,
      //channel=channel
    });
  } catch (error) {
    console.error(error);
  }
};
