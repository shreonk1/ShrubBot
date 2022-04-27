const { Guild, Client } = require("discord.js")

module.exports = {
    /**
  * 
  * @param {Client} client
  */
    name: 'help',
    description: 'Displays all commands and options for the discord bot',
    execute(message, args) {
        message.channel.send(">>> **Shrub's help menu**\n > Commands: \n - _**Admin Only**_ \n > Ban - Bans a user permanently from the discord. \n > Tempban - Bans a user temporarily from the discord. \n > Kick - kicks a user from the discord. \n > Mute - mutes a user permanently. \n > Tempmute - Mutes a user temporarily. \n > Unban - unbans a banned user. \n > Unmute - unmutes a muted user. \n - _**miscellaneous**_ \n > help - provides a list of all current commands for users. \n > adminsay - makes the bot say something.(**ADMIN**) \n > allsay - a say command for everyone. Mentions are disabled! \n - _**Roles**_ \n > createrole - creates a role with designated colours and name.(**ADMIN**) \n > giverole - gives a user a role. (**ADMIN**) \n > roles - prints out a list of all current roles. \n > takerole - takes a role from a user. (**ADMIN**)")
    }
}