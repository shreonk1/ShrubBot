const DiscordJS = require('discord.js');
const dotenv = require('dotenv');
dotenv.config()
const prefix = '-';
const fs = require('fs');
const { Client, Intents } = require('discord.js');
TOKEN = 'OTYxMjc3ODUzODA5Mzg1NTEy.Yk2pxA.SMj6_bcWG958_t-I90DlIykW5Wk';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new DiscordJS.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Quoty Bot is online!')
})



client.on('messageCreate', message =>{
    console.log("Command has been run");
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    client.commands.get(command).execute(message, args);
});


client.login(TOKEN);