let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • INDOSAT [085774403976]
│ 
│ 
╰────
╭─「 Hubungi 」
│ > Ingin donasi? https://wa.me/6285774403976
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 085774403976
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
