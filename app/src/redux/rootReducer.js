import { combineReducers } from 'redux';
import { incomingMessageReducer } from './modules/incomingMessageModule';

export const rootReducer = combineReducers({
  incomingMessageReducer
});