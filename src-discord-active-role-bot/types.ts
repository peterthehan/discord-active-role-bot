import { Snowflake } from "discord.js";

export interface Config {
  guildId: Snowflake;
  roleId: Snowflake;
  roleDuration: number;
}
