const Command = require('../../client/Command.js');
const { EmbedBuilder, Colors, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js')

module.exports = class extends Command {
  constructor(client) {
  super(client, {
    name: 'endpoint',
    aliases: ['endpointlist', 'listends']
  })
    this.client = client
  }
  run = async(message, args) => {
    const embed = new EmbedBuilder()
    .setTitle('[ ℹ️ ] | Endpoints - List')
    .addFields([
      {name: `/api/imgs/ship/`, value: `> Cria uma imagem de dois usuário shipados\n> 💻 | Parâmetros: \`\`\`\?avatarOne={Link}&avatarTwo={Link}&emoji={Opcional}\`\`\``, inline: false},
      {name: `/api/discord/fetchBanner`, value: `> Busca o banner do usuário informado\n> 💻 | Parâmetros: \`\`\`\?userID={ID do user}\`\`\``, inline: false}
    ])
    .setColor(Colors.Green)
.setThumbnail(this.client.user.displayAvatarURL())

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel('API Link')
      .setStyle(ButtonStyle.Link)
      .setURL('https://Nexter.kauazs.repl.co')
      )
    message.reply({embeds: [embed], components: [button]})
  }
}