/*
Socket.IO
 */

const PORT = 3000;
const Client = require('socket.io-client');
const socket = Client(`ws://localhost:${PORT}`);

/*
Config
 */

const PAYLOAD_SIZE = 100000;

/*
Frontend
 */

const state = require('./src/state');

/*
Test
 */

const sendMessage = async messageNumber => {
  const message = {
    senderId: Infinity,
    text: `Message #${messageNumber}`,
    type: 'user'
  };

  await socket.emit('message', message);

  state.setMessage(message);

  const count = state.messages.length;

  console.log(`${count} messages sent.`);
};

const test = async () => {
  let messagesRemaining = PAYLOAD_SIZE;

  const dispatch = async () => {
    if (!messagesRemaining--) {
      console.log('Test finished.');

      return;
    }

    await sendMessage(PAYLOAD_SIZE - messagesRemaining);

    setImmediate(dispatch);
  };

  dispatch();
};

console.log('Running...');
test();
