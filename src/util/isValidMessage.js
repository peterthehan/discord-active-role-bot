module.exports = message => {
  if (message.author.bot) return false;

  if (message.system) return false;

  if (message.channel.type !== 'text') return false;

  if (
    !message.channel.permissionsFor(message.client.user.id).has('MANAGE_ROLES')
  )
    return false;

  return true;
};
