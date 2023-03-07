/*
Socket.IO
 */

const PORT = 3000;
const { Server } = require('socket.io');
const socket = new Server(PORT);

/*
MongoDB
 */

const { MongoClient } = require('mongodb');
const dbName = 'chat';
const url = 'mongodb://localhost:27017';
const mongo = new MongoClient(url, { useUnifiedTopology: true });

mongo.connect(error => {
  if (error) throw error;

  const db = mongo.db(dbName);

  /*
  Backend
  */

  const store = require('./src/store')(db);
  const events = require('./src/events')(socket, store);

  /*
  Events
  */

  socket.on('connect', async connection => {
    connection.on('message', events.onMessage);
    events.onConnect(connection);
  });

  console.log(`PORT: ${PORT}`);
});
