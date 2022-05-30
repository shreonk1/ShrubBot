const { MessageEmbed } = require("discord.js")
const { User } = require("discord.js")
const { Permissions } = require('discord.js')
const { Client } = require('discord.js')
const { Message } = require('discord.js')

module.exports = {
    /**
  * 
  * @param {Client} client
  * @param {Message} message
  */
    name: 'roles',
    description: 'prints a full list of all roles on the discord server.',
    execute(message, args, client) {
        
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!member) return message.reply('Please specify a user!')

        const memberRoles = member.roles.cache
        .filter((roles) => roles.id !== message.guild.id)
        .map((role) => role.toString())

    message.channel.send(
        new MessageEmbed()
            .setAuthor("message.user.tag", member.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`${member}'s roles are: ${memberRoles}`)
            .setColor('RANDOM')

    
    )

    }
}