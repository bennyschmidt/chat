/*
Dependencies
 */

const readline = require('./lib/readline');

/*
App
 */

module.exports = (socket, state) => {

  const prompt = () => {
    readline.question('', text => {
      if (!state.user) {
        state.setMessage({
          senderId: -1,
          text: 'You are not logged in.',
          type: 'system'
        });

        return;
      }

      if (text) {
        socket.emit('message', {
          senderId: state.user.id,
          text
        });
      }

      prompt();
    });
  };

  return {
    onAuth: ({ id }) => {
      state.setUser({ id });

      prompt();
    },

    onMessage: ({ senderId, text, type }) => {
      state.setMessage({
        senderId,
        text,
        type
      })
    }
  };
};
