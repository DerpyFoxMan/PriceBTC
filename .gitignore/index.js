const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setGame("Command: $help");
    console.log("Connected");
});

bot.login("MzkzMjUwNTIwODk2MTEwNTkz.DSBV6Q.GzkLp-7GQDd8_stMma-X8NAfjSo");

bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n -$help");
    }

    if (message.content === prefix + "BTC-USD") {
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectuée");
    }
});
