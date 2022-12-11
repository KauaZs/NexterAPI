const Event = require('../client/Event.js')

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'messageCreate'
    })
    this.client = client
  }
  run = async(message) => {
    const prefix = '.'
    if(message.author.bot) return;

    if(message.content.replace('!','').startsWith(`<@${this.client.user.id}>`)) return message.reply(`💻 › Olá \`${message.author.tag}\` meu nome é **Nexter**, sou uma \`API\` de utilidades e funcionalidades.`)
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split()
    const cmd = args.shift().toLowerCase()
    const command = this.client.commands.get(cmd) || this.client.commands.find(x => x.aliases.includes(cmd));
    if(command) return command.run(message, args)
  }
}
