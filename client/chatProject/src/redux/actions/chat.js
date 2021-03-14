
import * as api from '../../API/chat.js';

export const getChats = () => async (dispatch) => {
  try {
    const { data } = await api.fetchChats();

    dispatch({ type: "FETCH_ALL_CHATS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createChat = (chat) => async (dispatch) => {
  try {
    const { data } = await api.createChat(chat);

    dispatch({ type: "CREATE_CHAT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateChat = (id, chat) => async (dispatch) => {
  try {
    const { data } = await api.updateChat(id, chat);

    dispatch({ type: "UPDATE_CHAT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteChat = (id) => async (dispatch) => {
  try {
    await api.deleteChat(id);

    dispatch({ type: "DELETE_CHAT", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
