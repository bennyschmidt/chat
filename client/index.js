/*
Socket.IO
 */

const PORT = 3000;
const Client = require('socket.io-client');
const socket = Client(`ws://localhost:${PORT}`);

/*
Frontend
 */

const state = require('./src/state');
const app = require('./src/app')(socket, state);

/*
Events
 */

socket.on('auth', app.onAuth);
socket.on('message', app.onMessage);

console.log('Welcome to the chat!');
