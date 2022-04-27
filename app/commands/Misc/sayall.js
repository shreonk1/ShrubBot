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
        let msg = args.join(' ').ment
        let textchannel = message.mentions.channels.first()// find the channel you mention
        message.delete // delete message
        if(!message.member.permissions.has([Permissions.FLAGS.SEND_MESSAGES])) {// check permissions
            return message.reply("You do not have permission to use this command")
        }else if (!args[0]) {
            message.reply('Please tell me what you want me to say.')
        }else {
            msg = args.join(' ')
            message.channel.send(msg)
            message.delete(msg)
            }
        }
    }