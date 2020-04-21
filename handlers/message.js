const { guildRoleMap } = require("../config");
const isValidMessage = require("../util/isValidMessage");

module.exports = async (message) => {
  if (!isValidMessage(message)) return;

  if (!(message.guild.id in guildRoleMap)) return;

  const { roleId, roleDuration } = guildRoleMap[message.guild.id];
  if (message.member.roles.cache.has(roleId)) return;

  message.member.roles.add(roleId);
  setTimeout(
    () => message && message.member && message.member.roles.remove(roleId),
    roleDuration * 1000
  );
};
