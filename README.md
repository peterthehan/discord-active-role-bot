# Discord Active Role Bot

A Discord bot that assigns a role to a user on their first message and removes it daily.

## Setup

1. Follow the instructions in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

> Don't forget to give your bot the `Manage Roles` permission!

2. Download this widget and move it into the [src/widgets](https://github.com/peterthehan/create-discord-bot/blob/master/src/widgets/) folder.

3. Open [config.js](https://github.com/peterthehan/discord-active-role-bot/blob/master/config.js) to configure your own settings:

```js
guildRoleMap: {
  'GUILD_ID': {
    roleId: 'ROLE_ID',
    roleDuration: 28800
  },
  // ...Add as many guild-role mappings as you want.
}
```

> `roleDuration` (in seconds) is how long the role is given to the member before it is removed.

4. `npm start` to start the bot.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discordapp.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
