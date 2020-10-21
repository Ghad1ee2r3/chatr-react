import { SET_CHANNELS, ADD_CHANNEL } from "./actionTypes";

import instance from "./instance";
import axios from "axios"


export const fetchChannels = () => async dispatch => {
  try {
    console.log("im trying to fetch");
    const res = await instance.get("/channels/");
    const channels = res.data;
    dispatch({
      type: SET_CHANNELS,
      payload: channels
    });
  } catch (error) {
    console.error(error);
    console.log("im trying to fetch but nuh");

  }
};

export const postChannel = (channel, closeModal) => async dispatch => {
  try {
    const res = await instance.post("/channels/create/", channel);
    //const res = await instance.post("http://127.0.0.1:8000/channels/create/", channel);
    const newChannel = res.data;
    closeModal();
    dispatch({
      type: ADD_CHANNEL,
      payload: newChannel
    });
  } catch (error) {
    console.error(error.response.data);
  }
};
