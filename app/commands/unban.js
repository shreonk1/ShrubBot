const { Interaction } = require("discord.js");
const { CommandInteraction } = require("discord.js");
const { Guild } = require("discord.js")
const { Permissions } = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'unban',
    description: 'unbans a banned user',
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    execute(message, args) {

    }
    
}