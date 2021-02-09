var mineflayer = require('mineflayer');

var bot = mineflayer.createBot({
    host: 'localhost',
    port: 52952,
    username: 'Offeex'
});

bot.on('spawn', () => {
    bot.chat('Я извиняюсь перед новым байкалом я тупая свинья хохлятская всем извините особенно амферо');
});

bot.on('chat', (message) => {
    if(message == 'amfero') {
        bot.chat("отъебись нахуй");
    }
});

bot.on('chat', (username, message) => {
    if (message.includes('text')) {
        if (username === bot.username) return;
        var text = message.split(' ').slice(1).join(' ');
        bot.chat(text);
    }
});