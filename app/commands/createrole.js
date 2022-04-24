const { User } = require("discord.js")
const { Permissions } = require('discord.js')

module.exports = {
    /**
  * 
  * @param {Client} client
  * @param {Message} message
  */
    name: 'createrole',
    description: 'creates a custom role with a custom choice of colour',
    execute(message, args) {









        
        const role = guild.roles.cache.find((role) => {
            console.log(role)
            return role.name === roleName
        })
    } 
}