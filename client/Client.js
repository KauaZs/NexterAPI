const { Client, Collection } = require('discord.js')
const { resolve } = require('path');
const { sync } = require('glob');

module.exports = class extends Client {
  constructor(client) {
    super(client);
    this.commands = new Collection()

    this.loadCommands()
    this.loadEvents()
  }
  setup(token) {
    this.login(token)
  }
  loadCommands(path = './commands/**/*.js') {
    const commands = sync(path)
    commands.forEach(file => {
      const cmd = new (require(resolve(file)))(this)
      this.commands.set(cmd.name, cmd)
      console.log(`{ Nexter - Bot } [ Commands ] ${cmd.name} carregado`)
    })
  }
  loadEvents(path = './events/*.js') {
    const events = sync(path) 
    events.forEach(file => {
      const event = new (require(resolve(file)))(this)
      this.on(event.name, event.run)
    })
  }
}