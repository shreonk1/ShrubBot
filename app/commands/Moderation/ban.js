const {Permissions} = require('discord.js')

module.exports = {
    name: 'ban',
    description: "This is a ban command",
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    execute(message, args) {
         /**
  * 
  * @param {Client} client
  * @param {Message} message
  */
        member = message.mentions.members.first()
        if(message.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) {
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.reply("User has been banned.");
        } else {
            message.channel.send('Please select a user to ban.')
        }
        } else {
            message.channel.send('You do not have the required permissions to use this command!')
        }
    }
}