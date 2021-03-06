const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const PORT = 3001;
const path = require('path');

// initialize the application and create the routes
const app = express();
const router = express.Router();

//initialize a simple http server
const server = http.createServer(app);

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' }
));

app.get('/', (req, res) => {
  res.send('connecting things blah');
});

// tell the app to use the above rules
app.use(router);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

  //connection is up, let's add a simple simple event
  ws.on('message', (message) => {
    //log the received message and send it back to the client
    console.log('received: %s', message);

    const broadcastRegex = /^broadcast\:/;

    message = message.replace(broadcastRegex, '');

      //send back the message to the other clients
      wss.clients
        .forEach(client => {
          if (client != ws) {
            client.send(`${message}`);
          }
      });
  });

  //send immediatly a feedback to the incoming connection    
  ws.send('Hi there, I am a WebSocket server');
});

// start the app
server.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log(`listening on ${PORT}...`);
});