const { Guild, Client, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'say',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    description: 'Makes the bot say something',
    execute(message, args) {
        run: async(message, args, client) => {
            const sayEmbed = new MessageEmbed()
            .getAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
            .setDescription(args.join(" "))
            .setTimestamp()
            .setColor(RANDOM)

            message.channel.send(sayEmbed)
        };
    }
}