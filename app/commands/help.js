const { Guild, Client } = require("discord.js")

module.exports = {
    /**
  * 
  * @param {Client} client
  */
    name: 'help',
    description: 'Displays all commands and options for the discord bot',
    execute(message, args) {
        message.channel.send(">>> **Shrub's help menu**\n > Commands: \n - _**Admin Only**_ \n > Ban - Bans a user permanently from the discord. \n > Tempban - Bans a user temporarily from the discord. \n > Kick - kicks a user from the discord. \n > Mute - mutes a user permanently. \n > Tempmute - Mutes a user temporarily. \n > Say - makes the bot say something. \n > Unban - unbans a banned user. \n > Unmute - unmutes a muted user. \n > Giverole - gives a user a specificed role. \n > Takerole - Removes a specified role from a user.")
    }
}