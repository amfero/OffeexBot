var mineflayer = require('mineflayer')
var pvp = require('mineflayer-pvp').plugin
var { pathfinder, Movements, goals} = require('mineflayer-pathfinder')
var armorManager = require('mineflayer-armor-manager')
var config = require("./config.json");

var bot = mineflayer.createBot({
    host: config.ip,
    port: config.port,
    username: config.username
});

bot.loadPlugin(pvp)
bot.loadPlugin(armorManager)
bot.loadPlugin(pathfinder)

bot.on('spawn', () => {
    bot.chat('Я извиняюсь перед новым байкалом я тупая свинья хохлятская всем извините особенно амферо');
});

bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    if (message.startsWith('text')) {
        var text = message.split(' ').slice(1).join(' ');
        bot.chat(text);
    }
    var lowercase = message.toLowerCase();
    if(lowercase.includes('rockez') ||
    lowercase.includes('zergon') ||
    lowercase.includes('рокез') ||
    lowercase.includes('зергон') ||
    lowercase.includes('offeex')) {
        bot.chat('рокез хуйло')
    }
    if(lowercase.includes('fit') ||
    lowercase.includes('фит')) {
        bot.chat('фит пидорас')
    }
    if(lowercasr.includes(bot.username)) {
        bot.chat('Отъебись реАЛЬНо')
    }
    if (message.startsWith('$пиздинг')) {
        var text = message.split(' ').slice(1).join(' ');
        var player = bot.players[text]
        if (!player) {
            bot.chat("ну и кого мне пиздить")
            return
        }
        bot.pvp.attack(player.entity)
    }
    if(message === '$алмазы') {
            var GoalBlock = goals.GoalBlock
            const mcData = require('minecraft-data')(bot.version)
            const movements = new Movements(bot, mcData)
            movements.scafoldingBlocks = []
            bot.pathfinder.setMovements(movements)
        
            const diamodeOre = bot.findBlock({
                matching: mcData.blocksByName.diamond_ore.id,
                maxDistance: 64
            })
        
            if (!diamodeOre) {
                bot.chat("Нет алмазов")
                return
            }
        
            const x = diamodeOre.position.x
            const y = diamodeOre.position.y + 1
            const z = diamodeOre.position.z
            bot.chat(`x:${x} y:${y} z:${z}`)
            const goal = new GoalBlock(x, y, z)
            bot.pathfinder.setGoal(goal)
        }
    if(message.startsWith('$пиздуй')) {
        var GoalFollow = goals.GoalFollow
        var text = message.split(' ').slice(1).join(' ');
        var player = bot.players[text]
        if (!player || !player.entity) {
            bot.chat("Где кого за кем нахуй")
            return
        }
        const mcData = require('minecraft-data')(bot.version)
        const movements = new Movements(bot, mcData)
        movements.scafoldingBlocks = []
        bot.pathfinder.setMovements(movements)
        const goal = new GoalFollow(player.entity, 1)
        bot.pathfinder.setGoal(goal, true)
    }
    if(message === '$stop') {
        bot.pvp.stop()
        bot.pathfinder.setMovements(null);
        bot.pathfinder.setGoal(null);
        bot.clearControlStates();
    }
});
