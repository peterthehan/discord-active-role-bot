module.exports = {
  token: ('TOKEN' in process.env ? process.env : require('../config')).TOKEN,
  events: ['message'],
  roleDuration: 21600,
  guildRoleMap: {
    '258167954913361930': '682035618536095779'
  }
};
