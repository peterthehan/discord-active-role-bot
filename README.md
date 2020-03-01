# Discord Active Role Bot

A Discord bot that assigns a role to a user on their first message and removes it daily.

## Setup

1. Adapt and follow the steps found in [create-discord-bot](https://github.com/peterthehan/create-discord-bot).

> Follow the [Create Bot](https://github.com/peterthehan/create-discord-bot#create-bot) and [Get Bot](https://github.com/peterthehan/create-discord-bot#get-bot) sections. Remember to replace with the correct project name in step 1 of the [Get Bot](https://github.com/peterthehan/create-discord-bot#get-bot) section!

> Don't forget to give your bot the Manage Roles permission!

2. Open [src/config.js](https://github.com/peterthehan/discord-active-role-bot/blob/master/src/config.js) to configure your own settings:

```js
guildRoleMap: {
  'GUILD_ID': {
    roleId: 'ROLE_ID',
    roleDuration: 21600
  },
  // ...Add as many guild-role mappings as you want.
}
```

> `roleDuration` (in seconds) is how long the role is given to the member before it is removed.

Visit for more help or information!

<a href="https://discord.gg/WjEFnzC">
  <img src="https://discordapp.com/api/guilds/258167954913361930/embed.png?style=banner2" title="Discord Server"/>
</a>
