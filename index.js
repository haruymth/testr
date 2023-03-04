const { token } = process.env;

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]
});

//起動確認
client.once('ready', () => {
  console.log(`${client.user.tag} Ready`);
});

//返答
client.on('messageCreate', message => {
  if (message.author.bot) {
    return;
  }
  if (Math.round(Math.random() * 100) == 1) {
    message.reply({
      content: "草"
    });
  }
  if (Math.round(Math.random() * 10) == 1) {
    message.reply({
      content: "草"
    });
  }
});

//Discordへの接続
client.login(token);

const http = require("http");
http.createServer(function(req,res){
  res.end("Hello, World!);
  }
).listen(3000);
