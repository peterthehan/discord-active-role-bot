const { guildRoleMap, roleDuration } = require('../config');
const isValidMessage = require('../util/isValidMessage');

module.exports = async message => {
  if (!isValidMessage(message)) return;

  const roleId = guildRoleMap[message.guild.id];
  if (!(message.guild.id in guildRoleMap)) return;

  if (message.member.roles.cache.has(roleId)) return;

  message.member.roles.add(roleId);
  setTimeout(() => message.member.roles.remove(roleId), roleDuration * 1000);
};
