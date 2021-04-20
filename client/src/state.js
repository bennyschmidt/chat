/*
Dependencies
 */

const render = require('./lib/renderer');

/*
Memory
 */

let messages = [];
let user = null;

/*
State
 */

module.exports = ({
  get messages() {
    return messages;
  },

  get user() {
    return user;
  },

  setUser: ({ id }) => {
    user = {
      createdAt: Date.now(),
      id
    };
  },

  setMessage: ({ senderId, text, type }) => {
    const isTest = senderId === Infinity;

    messages = [
      ...messages,

      {
        senderId,
        text,
        type
      }
    ];

    if (!isTest) {
      render(messages);
    }
  }
});
