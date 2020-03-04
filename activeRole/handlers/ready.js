const { guildRoleMap } = require('../config');

module.exports = async client => {
  console.log('activeRole: ready');

  Object.keys(guildRoleMap)
    .map(guildId => client.guilds.resolve(guildId))
    .filter(Boolean)
    .forEach(guild => {
      const { roleId } = guildRoleMap[guild.id];
      guild.members.cache
        .array()
        .filter(member => member.roles.cache.has(roleId))
        .forEach(member => member.roles.remove(roleId));
    });
};
