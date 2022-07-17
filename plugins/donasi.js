let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0882-2775-8096]
│ •  [0852-2842-4310]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
