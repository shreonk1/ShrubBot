
// const {User, Permissions, CommandInteraction, MessageEmbed, Client, Message } = require('discord.js')

// module.exports = {
//     name: 'mute',
//     aliases: ['m'],
//     description: 'mutes a user',
//     usage: '-mute',
//     /**
//      * @param {Client} client
//      * @param {Message} message
//      * @param {String[]} args
//      */
//     async execute(message, args, client, discord) {
//         const member = message.mentions.members.first()
//         let time = args[1]
//         const reason = args.slice(2).join(' ')
//         const role = message.guild.roles.cache.find(role => role.name === 'Muted')

//         if (!member) return message.reply('Mention a user!')
//         if (!time) return message.reply('Please specify a time!')
//         if (!reason) return message.reply('Give me a reason!')

//         if (member.id === message.author.id) return message.reply(`You can't mute yourself.`)
//         if (member.id === client.id) return message.reply(`You can't mute me.`)

//         if (!role) {
//             try {
//                 message.channel.send('No muted role found, making one!')
//                 let muterole = await message.guild.roles.create({
//                     data: {
//                         name: 'Muted',
//                         permissions: [],
//                     }
//                 })
//                 message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
//                     await channel.createOverwrite(muterole, {
//                         SEND_MESSAGES: false,
//                         ADD_REACTIONS: false,
//                     })
//                 })
//                 message.channel.send(
//                     new MessageEmbed()
//                     .setDescription(` Role "Muted" has successfully been created!`)
//                     .setColor("GREEN")
//                 )
//             }
//             catch(error) {
//                 console.log(error)
//             }
//         }
//         let role2 = message.guild.roles.cache.find(role => role.name === 'Muted')
//         if(Member.roles.cache.channels(role2)) return message.reply('User is already muted! ')

//         if(Member.roles.highest.position >= message.member.roles.highest.position) return message.reply(`You can't mute this user.`)
        

//         Member.roles.add(role2)
//         message.channel.send(`${Member.user.username} has been muted for ${ms(ms(time))}, Reason: ${reason}`)

//         setTimeout(() => {
//             Member.roles.remove(role2)
//         }, ms(time))


//     }
// }
