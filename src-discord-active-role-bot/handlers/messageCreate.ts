import { Guild, GuildMember, Message } from "discord.js";
import { getConfig } from "../util/getConfig";

module.exports = async (message: Message): Promise<void> => {
  if (message.author.bot || message.channel.type !== "GUILD_TEXT") {
    return;
  }

  const config = getConfig(message.guild as Guild);
  if (!config) {
    return;
  }

  const member = message.member as GuildMember;
  if (member.roles.cache.has(config.roleId)) {
    return;
  }

  await member.roles.add(config.roleId);
  setTimeout(
    () => member?.roles?.remove(config.roleId),
    config.roleDuration * 1000
  );
};
