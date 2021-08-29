import { Client } from "discord.js";
import configs from "../config.json";
import { Config } from "../types";

module.exports = async (client: Client): Promise<void> => {
  console.log(__dirname.split("\\").slice(-2)[0]);

  for (const config of configs as Config[]) {
    const guild = await client.guilds.fetch(config.guildId);
    if (!guild) {
      continue;
    }

    guild.members.cache
      .filter((member) => member.roles.cache.has(config.roleId))
      .forEach(async (member) => await member.roles.remove(config.roleId));
  }
};
