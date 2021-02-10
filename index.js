var mineflayer = require('mineflayer');
const { brotliCompress } = require('zlib');

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
    if(message == '$forward') {
        bot.setControlState('forward', true)
    }
    if(message == '$back') {
        bot.setControlState('back', true)
    }
    if(message == '$left') {
        bot.setControlState('left', true)
    }
    if(message == '$right') {
        bot.setControlState('right', true)
    }
    if(message == '$jump') {
        bot.setControlState('jump', true)
    }
    if(message == '$stop') {
        bot.setControlState('jump', false)
        bot.setControlState('forward', false)
        bot.setControlState('back', false)
        bot.setControlState('left', false)
        bot.setControlState('right', false)
    }
});

bot.on('playerJoined', (player) => {
    bot.chat(`Че пришел ${player.username}`)
});

bot.on('playerLeft', (player) => {
    bot.chat(`Изи слит опущ ${player.username}`)
});