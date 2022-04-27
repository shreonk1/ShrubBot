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
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    execute(message, args) {

        const targetUser = message.mentions.members.first()
        if (!targetUser) {
            console.log(user)
            message.reply('Please specify a user to give the role to.')
            return
        } 

        args.shift()
        const roleName = args.join(' ')
        console.log(roleName)
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
            console.log(role)
            return role.name === roleName
        })
        
        if (!role) {
            console.log(role)
            message.reply(`There is no role with the name "${role.name}"`)
            return
        }

        const member = guild.members.cache.get(targetUser.id)
        if(message.member.roles.cache.has('952595429223190588')) {
            member.roles.add(role)
            console.log(`Role given: "${role.name}"`)

            message.reply(`"${targetUser}" now has the "${roleName}" role!`)
        } else {
            message.reply('You do not have the correct permissions to use this command. \n Talk to one of our admins if you are having problems.')
        }
    },
}