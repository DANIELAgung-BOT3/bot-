let handler = function (m) {
  // this.sendContact(m.chat, '6285774403976', 'Nurutomo', m)
  this.sendContact(m.chat, '6285774403976', 'Admin DANIEL✓', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
