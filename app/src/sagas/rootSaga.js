import { takeLatest, all, fork } from 'redux-saga/effects';
import {
  receiveMessage,
  IncomingMessageTypes,
} from '../redux/modules/incomingMessageModule';
import { messageSaga, receiveMessageSuccessSaga } from './messageSaga';


export function* rootSaga() {
  yield all([
    takeLatest(IncomingMessageTypes.RECEIVE_MESSAGE, messageSaga),
    fork(receiveMessageSuccessSaga)
  ])
}