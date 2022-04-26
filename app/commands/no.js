const { User } = require("discord.js")
const { Permissions } = require('discord.js')

module.exports = {
    name: 'doubt',
    description: 'doubts',
    /**
  * 
  * @param {Client} client
  * @param {Message} message
  */
    execute(message, args) {
        message.channel.send('I doubt that')
    }
}