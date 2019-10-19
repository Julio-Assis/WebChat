import { takeLatest, all } from 'redux-saga/effects';
import {
  receiveMessage,
  IncomingMessageTypes,
} from '../redux/modules/incomingMessageModule';
import { messageSaga } from './messageSaga';


export function* rootSaga() {
  yield all([
    takeLatest(IncomingMessageTypes.RECEIVE_MESSAGE, messageSaga)
  ])
}