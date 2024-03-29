# Discord Active Role Bot

[![Discord](https://discord.com/api/guilds/258167954913361930/embed.png)](https://discord.gg/WjEFnzC) [![Twitter Follow](https://img.shields.io/twitter/follow/peterthehan.svg?style=social)](https://twitter.com/peterthehan)

A Discord bot that assigns a role to a user when they send a message and removes it after a fixed time.

<div align="center">
  <img
    src="https://raw.githubusercontent.com/peterthehan/discord-active-role-bot/master/assets/demo.gif"
    alt="demo"
  />
</div>

## Setup

1. Follow the instructions in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

   > Don't forget to give your bot the `Manage Roles` permission!

2. Download this bot and move the `src-discord-active-role-bot` folder into the [/src/bots](https://github.com/peterthehan/create-discord-bot/tree/master/src/bots) folder from step 1.

3. Open [config.json](./src-discord-active-role-bot/config.json) to configure your own settings:

   ```json
   [
     {
       "guildId": "258167954913361930",
       "roleId": "682035618536095779",
       "roleDuration": 43200
     }
   ]
   ```

   Add as many rules as you want to configure for other servers.

   - `guildId` is the server id.
   - `roleId` is the role to grant on activity.
   - `roleDuration` (in seconds) is how long the role is given to the member before it is removed.

4. `npm start` to run the bot.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discord.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
