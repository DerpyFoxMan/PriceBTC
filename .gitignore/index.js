const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setGame("$pBTC");
    console.log("Connected");
});

bot.login("MzkzMjUwNTIwODk2MTEwNTkz.DSBV6Q.GzkLp-7GQDd8_stMma-X8NAfjSo");

bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n -$help \n -$BTC-USD");
    }

    if (message.content === prefix + "pBTC") {
        message.reply("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD");
        console.log("Commande BTC-USD effectuée");
    }
});
