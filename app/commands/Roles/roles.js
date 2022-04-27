const { Guild, RoleManager } = require("discord.js")

module.exports = {
    name: 'roles',
    description: 'prints a full list of all roles on the discord server.',
    execute(message, args) {
        const roles = Guild.roles = new RoleManager();
    }
}