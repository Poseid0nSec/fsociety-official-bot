const Discord = require("discord.js");
const fs = require("fs");
const config = require('../config.json');

exports.run = async (client,message) => {
    if (message.content == '<@540418072914427924>') return message.channel.send(`Minha prefix é \`${config.prefix}\`, use **m!ajuda**.`);
    if (message.content === 'Emilly') return message.reply("Como que posso ajuda?");
    if ((message.content).toLowerCase() === 'fumar') return message.reply('aqui seu fumante: 🚬 💨💨💨');
    if (message.content === 'usuarios') return message.reply(`Players Atual do server. __${message.guild.memberCount}__`);

    if (message.author.bot) return;
    if (!message.channel.type == "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
   

    let command = message.content.split(" ")[0].slice(config.prefix.length);
    let args = message.content.split(" ").slice(1);
   
    try {
        let commandFile = require(`../commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        return message.channel.send(`${message.author}, esse comando não foi encontrado, utilize ***ajuda** para mais informações.`);
    }
};