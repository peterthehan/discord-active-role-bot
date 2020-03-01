module.exports = {
  token: ('TOKEN' in process.env ? process.env : require('../config')).TOKEN,
  events: ['message'],
  guildRoleMap: {
    '258167954913361930': {
      roleId: '682035618536095779',
      roleDuration: 21600
    }
  }
};
