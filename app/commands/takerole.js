const { User } = require("discord.js")
const { Permissions } = require('discord.js')

module.exports = {
    /**
  * 
  * @param {Client} client
  * @param {Message} message
  */
    name: 'takerole',
    description: 'Removes a role from the specified user',
    minArgs: 2,
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    execute(message, args) {
        
        const targetUser = message.mentions.members.first()
        if (!targetUser) {
            console.log(user)
            message.reply('Please specify a user to take the role from.')
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
        if(member.roles.cache.has('952595429223190588')) {
            member.roles.remove(role)
            console.log(`Role taken: "${role.name}"`)
             message.reply(`${targetUser} no longer has the "${roleName}" role!`)
        } else {
            message.reply('You do not have the correct permissions to use this command. \n Talk to one of our admins if you are having problems.')
        }
        
    }
}