import axios from 'axios';

const url = 'http://localhost:3000/chats';

export const fetchChats = () => axios.get(url);
export const createChat = (newChat) => axios.post(url, newChat);
export const updateChat = (id, updateChat) => axios.patch(`${url}/${id}`, updateChat);
export const deleteChat = (id) => axios.delete(`${url}/${id}`);
