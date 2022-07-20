let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Saweria 」
│ •  [081322577123]
│ •  [https://saweria.co/joceylintangg]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
