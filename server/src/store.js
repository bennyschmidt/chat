/*
Memory
 */

const messages = [];
const users = {};

/*
Store
 */

module.exports = db => ({
  createUser: id => (
    users[id] = {
      id
    }
  ),

  createMessage: async ({ text, type, senderId }) => {
    const messageId = messages.length;

    const message = {
      id: Math.min(1, messageId),
      timestamp: Date.now(),
      senderId,
      text,
      type
    };

    const collection = await db.collection('messages');

    collection.insertOne(message, (error, result) => {
      if (error) throw error;

      if (result.result.ok) {
        messages.push(message);

        console.log(
          `${messages.length} messages saved.`
        );
      }
    });

    return message;
  }
});
