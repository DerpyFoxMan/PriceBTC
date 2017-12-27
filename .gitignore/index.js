const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setGame("$pBTC");
    console.log("Connected");
}); //fin de ready

bot.login("MzkzMjUwNTIwODk2MTEwNTkz.DSBV6Q.GzkLp-7GQDd8_stMma-X8NAfjSo");

bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n -$help \n -$pBTC");
    }

    if (message.content === prefix + "pBTC") {
        message.channel.sendMessage("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD");
        console.log("Commande BTC-USD effectuée");
    }
    //
    if (message.content === prefix + "pb") {
        function BTC() {
            return new Promise((resolve) => {
                // send a request to blockchain
                request('https://blockchain.info/de/ticker', (error, reponse, body) => {
                    // parse the json answer and get the current bitcoin value
                    const data = JSON.parse(body);
                    value = (parseInt(data.THB.buy, 10) + parseInt(data.THB.sell, 10)) / 2;
                    resolve(value);
                });
            });
        }
        BTC().then(val => message.channel.sendMessage(val)
    }
    //
});//fin de message
