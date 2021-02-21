let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~Drawl Nag*

APA? TUTORIAL?LINK CHEAT FREE FIRE NIH GAS https://linkerload.com/x6psmozF SUBSCRIBE JUGA CHANNEL GUA WWKWKWK  https://youtube.com/channel/UCG1WGpax1aYhYFPUb52sJfw
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

