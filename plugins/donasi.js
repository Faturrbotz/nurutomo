let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axiss net [083813063969]
│ • Telkomsel [082113054478]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
