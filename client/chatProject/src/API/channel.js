import axios from 'axios';

const url = 'http://localhost:3000/channel';

export const fetchChannels = () => axios.get(url);
export const createChannel = (newChannel) => axios.post(url, newChannel);
export const updateChannel = (id, updateChannel) => axios.patch(`${url}/${id}`, updateChannel);
export const deleteChannel = (id) => axios.delete(`${url}/${id}`);
export const addUserToChannel=(id)=>axios.patch(`${url}/add/${id}`)