const { Guild, Client, MessageEmbed, RichEmbed, Permissions } = require("discord.js")
module.exports = {
    name: 'allsay',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    description: 'Makes the bot say something, any user may use this.',
    execute(message, args, client) {

        const targetUser = message.mentions.members.first()
        let msg = args.join(' ')
        if(!message.member.permissions.has([Permissions.FLAGS.SEND_MESSAGES])) {// check permissions
            return message.reply("You do not have permission to use this command")
         }else if (!args[0]) {
            message.reply('Please tell me what you want me to say.')
        }else if(/@[\w\d\.\*\-]+/.test(msg)) {
            msg = "You aren't allowed to mention through this command!"
            message.channel.send(msg)
        }if(message.author.id == '713685828081287241') {
            message.channel.send("You do not have permission to use this command")
            message.delete(msg)
            
        } else{
            message.channel.send(msg)
            }
        }   
    }