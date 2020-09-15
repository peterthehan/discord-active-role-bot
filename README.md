# Discord Active Role Bot

[![Discord](https://discordapp.com/api/guilds/258167954913361930/embed.png)](https://discord.gg/WjEFnzC) [![Twitter Follow](https://img.shields.io/twitter/follow/peterthehan.svg?style=social)](https://twitter.com/peterthehan)

A Discord bot that assigns a role to a user on their first message and removes it after a fixed time.

<div align="center">
  <img src="https://raw.githubusercontent.com/peterthehan/assets/master/repositories/discord-active-role-bot/activeRole.gif" />
</div>

## Setup

1. Follow the instructions in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

> Don't forget to give your bot the `Manage Roles` permission!

2. Download this widget and add it into the [src/widgets](https://github.com/peterthehan/create-discord-bot/tree/master/app/src/widgets) folder.

3. Open [config.json](https://github.com/peterthehan/discord-active-role-bot/blob/master/config.json) to configure your own settings:

```js
[
  {
    "guildId": "GUILD_ID",
    "roleId": "ROLE_ID",
    "roleDuration": 43200
  },
  // ...Add as many rules as you want.
]
```

- `roleDuration` (in seconds) is how long the role is given to the member before it is removed.

4. `npm start` to run the bot.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discordapp.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
