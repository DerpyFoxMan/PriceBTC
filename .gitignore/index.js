const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setGame("$BTC-USD");
    console.log("Connected");
});

bot.login("MzkzMjUwNTIwODk2MTEwNTkz.DSBV6Q.GzkLp-7GQDd8_stMma-X8NAfjSo");

bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n -$help \n -$BTC-USD");
    }

    if (message.content === prefix + "BTC-USD") {
        message.reply("https://www.bitstamp.net/api/v2/ticker/btcusd/");
        console.log("Commande BTC-USD effectuée");
    }
});
