var mineflayer = require('mineflayer')
var pvp = require('mineflayer-pvp').plugin
var { pathfinder, Movements, goals} = require('mineflayer-pathfinder')
var armorManager = require('mineflayer-armor-manager')

var bot = mineflayer.createBot({
    host: 'localhost',
    port: 59427,
    username: 'Offeex'
});

bot.loadPlugin(pvp)
bot.loadPlugin(armorManager)
bot.loadPlugin(pathfinder)

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
    if (message.startsWith('$пиздинг')) {
        var player = bot.players[username]
        if (!player) {
        bot.chat("ты где блядь")
        return
    }  
    bot.pvp.attack(player.entity)
    }
    if (message === '$stop') {
        bot.pvp.stop()
    }
});
