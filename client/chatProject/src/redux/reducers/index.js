import { combineReducers } from 'redux';

import chats from './chat.js';
import channels from './channel.js';
import users from './user.js';

export const reducers = combineReducers({ chats,channels,users });
