import { Guild, Snowflake } from "discord.js";
import configs from "../config.json";
import { Config } from "../types";

const configMap: Map<Snowflake, Config> = new Map();
(configs as Config[]).forEach((config) => {
  configMap.set(config.guildId, config);
});

function getConfig(guild: Guild): Config | undefined {
  if (!configMap.has(guild.id)) {
    return;
  }

  return configMap.get(guild.id);
}

export { getConfig };
