import {} from 'redux-saga';

const webssocket = new WebSocket('ws://localhost:3001');

webssocket.onopen = function (event) {
  console.log('hey jo! Socket connection started');
};

webssocket.onmessage = function(event) {
  console.log(`Hey bro! Just received a message here ${event.data}`);
};

webssocket.onclose = function(event) {
  console.log('You wont believe it, but I am closing this lovely connection');
  console.log(event);
};

webssocket.onerror = function(error) {
  console.log('there was some error here bro');
  console.log(error);
};


export function* messageSaga(action) {
  console.log('checking param1 and 2');
  console.log(action.payload.message);

  if (action.payload && action.payload.message) {
    const { message } = action.payload;
    webssocket.send(JSON.stringify(message))
  }
}
