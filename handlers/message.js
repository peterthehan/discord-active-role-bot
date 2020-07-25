module.exports = async (message) => {
  if (
    message.system ||
    message.author.bot ||
    message.author.system ||
    message.channel.type !== "text" ||
    !(message.guild.id in message.client.activeRoleRules)
  ) {
    return;
  }

  const { roleId, roleDuration } = message.client.activeRoleRules[
    message.guild.id
  ];
  if (message.member.roles.cache.has(roleId)) {
    return;
  }

  await message.member.roles.add(roleId);
  setTimeout(
    () => message && message.member && message.member.roles.remove(roleId),
    roleDuration * 1000
  );
};
