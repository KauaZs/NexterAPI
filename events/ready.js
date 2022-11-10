const Event = require('../client/Event.js')

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'ready'
    })
    this.client = client
  }
  run = async () => {
    console.log(`{ Nexter - BOT } [ Status ] Bot online.`)
  }
}