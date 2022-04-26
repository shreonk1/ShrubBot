const { Guild, Client, MessageEmbed, RichEmbed, Permissions } = require("discord.js")
module.exports = {
    name: 'say',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    description: 'Makes the bot say something',
    execute(message, args, client) {
        let msg;
        let textchannel = message.mentions.channels.first()// find the channel you mention
        message.delete // delete message
        if(!message.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) {// check permissions
            return message.reply("You do not have permission to use this command")
        } else if (!args[0]) {
            message.reply('Please tell me what you want me to say.')
        }else if(textchannel) { //mention the channel you want to send in
            msg = args.slice(1).join(' ') // for example: -say #general hello
            textchannel.send(msg)
        }else {
            msg = args.join(' ')
            message.channel.send(msg)
            message.delete
        }

    }
}