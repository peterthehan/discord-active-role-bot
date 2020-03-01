const { guildRoleMap, roleDuration } = require('../config');
const isValidMessage = require('../util/isValidMessage');

const activeUserCache = {};

module.exports = async message => {
  if (!isValidMessage(message)) return;

  const roleId = guildRoleMap[message.guild.id];
  if (!(message.guild.id in guildRoleMap)) return;

  if (message.author.id in activeUserCache) return;

  activeUserCache[message.author.id] = true;
  setTimeout(() => {
    delete activeUserCache[message.author.id];
    message.member.roles.remove(roleId);
  }, roleDuration * 1000);
  message.member.roles.add(roleId);
};
