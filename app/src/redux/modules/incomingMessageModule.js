export const IncomingMessageTypes = {
  RECEIVE_MESSAGE: '@@incomingMessageModule/RECEIVE_MESSAGE',
  RECEIVE_MESSAGE_SUCCESS: '@@incomingMessageModule/RECEIVE_MESSAGE_SUCCESS',
  RECEIVE_MESSAGE_ERROR: '@@incomingMessageModule/RECEIVE_MESSAGE_ERROR'
}

export const receiveMessage = (message) => ({
  type: IncomingMessageTypes.RECEIVE_MESSAGE,
  payload: {
    message
  }
});

export const receiveMessageSuccess = (message) => ({
  type: IncomingMessageTypes.RECEIVE_MESSAGE_SUCCESS,
  payload: {
    message
  }
});

export const receiveMessageError = (error) => ({
  type: IncomingMessageTypes.RECEIVE_MESSAGE_ERROR,
  payload: {
    error
  }
});

const initialState = {
  isReceivingMessages: false,
  lastMessage: {},
  error: '',

};

export const incomingMessageReducer = (state = initialState, action) => {
  switch(action.type) {
    case IncomingMessageTypes.RECEIVE_MESSAGE:
      return Object.assign({}, state, {
        lastMessage: action.payload.message
      });
    case IncomingMessageTypes.RECEIVE_MESSAGE_SUCCESS:
      return 0;
    case IncomingMessageTypes.RECEIVE_MESSAGE_ERROR:
      return 0;
    default:
      return state;
  }
}
