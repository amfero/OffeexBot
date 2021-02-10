var mineflayer = require('mineflayer');

var bot = mineflayer.createBot({
    host: 'localhost',
    port: 52354,
    username: 'Offeex'
});

bot.on('spawn', () => {
    bot.chat('Я извиняюсь перед новым байкалом я тупая свинья хохлятская всем извините особенно амферо');
});

bot.on('chat', (username, message) => {
    if (message.startsWith('text')) {
        if (username === bot.username) return;
        var text = message.split(' ').slice(1).join(' ');
        bot.chat(text);
    }
    if(message.toLowerCase().includes('rockez') ||
    message.toLowerCase().includes('zergon') ||
    message.toLowerCase().includes('рокез') ||
    message.toLowerCase().includes('зергон') ||
    message.toLowerCase().includes('offeex')) {
        if(username === bot.username) return;
        bot.chat('рокез хуйло')
    }
    if(message.toLowerCase().includes('fit') ||
    message.toLowerCase().includes('фит')) {
        if(username === bot.username) return;
        bot.chat('фит пидорас')
    }
    if(message.toLowerCase().includes(bot.username)) {
        if(username === bot.username) return;
        bot.chat('Отъебись реАЛЬНо')
    }
});
