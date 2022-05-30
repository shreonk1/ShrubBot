const { Guild, Client } = require("discord.js")

module.exports = {
    /**
  * 
  * @param {Client} client
  */
    name: 'help',
    description: 'Displays all commands and options for the discord bot',
    execute(message, args) {
        message.channel.send(`>>> **Shrub's help menu**  
      **Commands** : 
      - _**Admin Only**_ 
         > Ban - Bans a user permanently from the discord. 
         > Tempban - Bans a user temporarily from the discord. 
         > Kick - kicks a user from the discord. 
         > Mute - mutes a user permanently. 
         > Tempmute - Mutes a user temporarily. 
         > Unban - unbans a banned user. 
         > Unmute - unmutes a muted user. 
      - _**Miscellaneous**_ 
         > help - provides a list of all current commands for users. 
         > adminsay - makes the bot say something.(**ADMIN**) 
         > allsay - a say command for everyone. Mentions are disabled! 
      - _**Roles**_ 
         > createrole - creates a role with designated colours and names.(**ADMIN**) 
         > giverole - gives a user a role. (**ADMIN**) 
         > roles - displays the current roles a user has. 
         > takerole - takes a role from a user. (**ADMIN**)`)
      
    }
}