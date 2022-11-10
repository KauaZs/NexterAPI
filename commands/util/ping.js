const Command = require('../../client/Command.js')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'ping',
      aliases: ['latencia']
    })
    this.client = client
  }
  run = async(message, args) => {
    message.reply(`🏓 » Pong! \`${this.client.ws.ping}ms\``)
  }
}