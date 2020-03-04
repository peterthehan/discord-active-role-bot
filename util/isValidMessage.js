module.exports = message => {
  if (message.author.bot) return false;

  if (message.system) return false;

  if (message.channel.type !== 'text') return false;

  return true;
};
