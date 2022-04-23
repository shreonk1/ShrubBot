const { User } = require("discord.js")
const { Permissions } = require('discord.js')

module.exports = {
    /**
  * 
  * @param {Client} client
  * @param {Message} message
  */
    name: 'giverole',
    description: 'gives a user a designated role.',
    minArgs: 2,
    permissions: "ADMINISTRATOR",
    execute(message, args) {
        const targetUser = message.mentions.members.first()
        if (!targetUser) {
            message.reply('Please specify a user to give the role to.')
            return
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase(); 

        args.shift()

        const roleName = args.join(' ')
        console.log(roleName)
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })
        /*
        if (!role) {
            message.reply(`There is no role with the name "${roleName}"`)
            console.log(role)
            return
        }
        const member = guild.members.cache.get(targetUser.id)

        if (member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) {
            member.roles.add(role)
            console.log('Arno is a buttface')

            message.reply(`${User} now has the "${roleName}" role!`)

        }
        */
    },
}