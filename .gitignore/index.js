const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")
function BTCPrice() {
    request('https://blockchain.info/de/ticker', (error, response, body) => {
        const data = JSON.parse(body);
        var value = (parseInt(data.USD.buy, 10) + parseInt(data.USD.sell, 10)) / 2;

        return value;
    });

};
console.log(BTCPrice());

bot.on('ready', function() {
    bot.user.setGame("$pBTC");
    console.log("Connected");
});

bot.login("MzkzMjUwNTIwODk2MTEwNTkz.DSBV6Q.GzkLp-7GQDd8_stMma-X8NAfjSo");

bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n -$help \n -$pBTC");
    }

    if (message.content === prefix + "pBTC") {
        message.channel.sendMessage("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD");
        console.log("Commande BTC-USD effectuée");
    }
    ///
    if (message.content === prefix + "pb") {
        Discord.message(BTCPrice());
        console.log("Commande BTC-USD effectuée");
    }
});
