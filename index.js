const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

client.on("ready", () => {
    console.log("Ativo!")
});

let status = [
  {name: 'Lambuco da rede', type: 'PLAYING', url: 'https://www.twitch.tv/srmitopvp'},
  {name: 'O Slayyer da escada!', type: 'PLAYING', url: 'https://www.twitch.tv/srmitopvp'},
  {name: 'Thomas shell meu criador!', type: 'PLAYING', url: 'https://www.twitch.tv/srmitopvp'},
  {name: 'A paciencia do march0 na casa do krl!', type: 'PLAYING', url: 'https://www.twitch.tv/srmitopvp'},
];

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      try{ client.on(eventName, (...args) => eventFunction.run(client, ...args)); } catch (err) { console.error(err) }
  });
});

function setStatus() {
  let randomStatus = status[Math.floor(Math.random() * status.length)];
  client.user.setActivity(randomStatus);
}


// setStatus(); Nao precisa chamar a funçao aqui
setInterval(() => setStatus(), 5000); //{1000/1s}\{10000/10s}\{100000/1m}

client.login(process.env.TOKEN);
console.log("Logado!");