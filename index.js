const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

client.on("ready", () => {
    console.log("Ativo!")
});

let status = [
  {name: 'Lambuco da rede', type: 'PLAYING', url: 'https://www.twitch.tv/srmitopvp'},
  {name: 'O Slayyer da escada!', type: 'PLAYING', url: 'https://www.twitch.tv/srmitopvp'},
  {name: 'Thomas shell meu criador!', type: 'PLAYING', url: 'https://www.twitch.tv/srmitopvp'},
  {name: 'A paciencia do march0 na casa do krl!', type: 'PLAYING', url: 'https://www.twitch.tv/srmitopvp'},
];

client.on('guildCreate', guild => {
  let canal = client.channels.get('712732962088812586')
  let embedentrada = new Discord.RichEmbed()
  .setAuthor(client.user.username)
  .setTitle('** Acabei de entrar num servidor!**')
  .addField(`**Nome do servidor:**`, `\`${guild.name}\``)
  .addField(`**Id do servidor**`, `\`${guild.id}\``,)
  .addField(`** Membros:**` , `\`${guild.memberCount}\``,)
  .addField(`** Dono do servidor**` , `${guild.owner}`,)
  .setTimestamp()
  .setColor('#ff0bf7')

  canal.send(embedentrada)
})

client.on('guildDelete', guild => { 
 let canal = client.channels.get('712732985576915055')
 let embedesaida = new Discord.RichEmbed()
 .setAuthor(client.user.username)
 .setTitle('**Fui removido de um servidor**')
 .addField(`**Nome do servidor:**`, `\`${guild.name}\``)
 .addField(`**Id do servidor**`, `\`${guild.id}\``,)
 .addField(`**Membros:**` , `\`${guild.memberCount}\``,)
 .addField(`**Dono do servidor**` , `\`${guild.owner}\``,)

 .setTimestamp()
 .setColor('#ff0bf7') 

 canal.send(embedesaida)
})


function setStatus() {
  let randomStatus = status[Math.floor(Math.random() * status.length)];
  client.user.setPresence({game: randomStatus});
}


// setStatus(); Nao precisa chamar a funçao aqui
setInterval(() => setStatus(), 5000); //{1000/1s}\{10000/10s}\{100000/1m}

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.channel.type == "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
   
    let args = message.content.split(" ").slice(1);
   
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.log(err)
      message.channel.send(`${message.author}, esse comando não foi encontrado, utilize ***ajuda** para mais informações.`)
    
    }
   
  });

  client.on('message', async message => { // message => {} é o mesmo que function(message) {}
  // Um unico evento message é suficiente pro bot, um unico evento de cada tipo é o ideal
	if (message.content === 'Emilly') return message.reply("Como que posso ajuda?")
  if (message.content === 'Fumar') return message.reply('aqui seu fumante: 🚬 💨💨💨')
  if (message.content === 'usuarios') return message.reply(`Players Atual do server. __${client.users.size}__`)
  
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
});

  
  client.login(config.token);
  console.log("Logado!");

  client.on('message', message => {
    if (message.content == '<@540418072914427924>'){
      message.channel.send(`Minha prefix é \`${config.prefix}\`, use **m!ajuda**.`)
    }
  })