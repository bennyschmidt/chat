/*
API
 */

module.exports = (socket, store) => ({
  onConnect: async connection => {
    const { id } = store.createUser(connection.id);

    const message = await store.createMessage({
      type: 'system',
      text: 'A user joined the chat.',
      senderId: id
    });

    connection.emit('auth', { id });
    socket.sockets.emit('message', message);
  },

  onMessage: ({ text, senderId }) => {
    const dispatch = async () => {
      const message = await store.createMessage({
        type: 'user',
        text,
        senderId
      });

      socket.sockets.emit('message', message);
    };

    setImmediate(dispatch);
  }
});
