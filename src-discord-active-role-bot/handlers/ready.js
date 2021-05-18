const rules = require("../config");

module.exports = async (client) => {
  console.log("activeRole: ready");

  client.activeRoleRules = {};
  for (const rule of rules) {
    client.activeRoleRules[rule.guildId] = rule;
    const guild = client.guilds.resolve(rule.guildId);

    [...guild.members.cache.values()]
      .filter((member) => member.roles.cache.has(rule.roleId))
      .forEach(async (member) => await member.roles.remove(rule.roleId));
  }
};
