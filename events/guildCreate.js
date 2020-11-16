const Discord = require("discord.js");
const fs = require("fs");
const config = require('../config.json');

exports.run = async (client,guild) => {
    let canal = client.channels.get('712732962088812586');
    let embed_entrada = new Discord.MessageEmbed()
    .setAuthor(client.user.username)
    .setTitle('** Acabei de entrar num servidor!**')
    .addField(`**Nome do servidor:**`, `\`${guild.name}\``)
    .addField(`**Id do servidor**`, `\`${guild.id}\``,)
    .addField(`** Membros:**` , `\`${guild.memberCount}\``,)
    .addField(`** Dono do servidor**` , `${guild.owner}`,)
    .setTimestamp()
    .setColor('#ff0bf7');
  
    canal.send(embed_entrada);
};