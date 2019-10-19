import { combineReducers } from 'redux';
import { incomingMessageReducer } from './modules/incomingMessageModule';
import { userReducer } from "./modules/userModule";

export const rootReducer = combineReducers({
  incomingMessage: incomingMessageReducer,
  user: userReducer,
});
