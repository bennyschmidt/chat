module.exports = messages => {
  console.clear();

  console.log(
    messages.map(({ senderId, text, type }) => (
      `[${type === 'system' ? 'SYSTEM' : senderId === Infinity ? 'TEST' : senderId}]: ${text}`
    )).join('\n')
  );
};
