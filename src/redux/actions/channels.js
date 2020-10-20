import { SET_CHANNELS, ADD_CHANNEL } from "./actionTypes";

import instance from "./instance";

export const fetchChannels = () => async dispatch => {
  try {
    const res = await instance.get("channels/");
    const authors = res.data;
    dispatch({
      type: SET_CHANNELS,
      payload: channels
    });
  } catch (error) {
    console.error(error);
  }
};

export const postChannel = (channel, closeModal) => async dispatch => {
  try {
    const res = await instance.post("channels/create/", channel);
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
