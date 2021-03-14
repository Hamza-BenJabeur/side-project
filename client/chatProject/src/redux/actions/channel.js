
import * as api from '../../API/channel.js';

export const getChannels = () => async (dispatch) => {
  try {
    const { data } = await api.fetchChannels();

    dispatch({ type: "FETCH_ALL_CHANNELS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createChannel = (channel) => async (dispatch) => {
  try {
    const { data } = await api.createChannel(channel);

    dispatch({ type: "CREATE_CHANNEL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateChannel = (id, channel) => async (dispatch) => {
  try {
    const { data } = await api.updateChannel(id, channel);

    dispatch({ type: "UPDATE_CHANNEL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteChannel = (id) => async (dispatch) => {
  try {
    await api.deleteChannel(id);

    dispatch({ type: "DELETE_CHANNEL", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
export const addUserToChannel = (id) => async (dispatch) => {
  try {
    await api.addUserToChannel(id);

    dispatch({ type: "ADD_USER_TO_CHANNEL", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
