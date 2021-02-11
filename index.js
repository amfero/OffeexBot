var mineflayer = require('mineflayer')
var pvp = require('mineflayer-pvp').plugin
var { pathfinder, Movements, goals} = require('mineflayer-pathfinder')
var armorManager = require('mineflayer-armor-manager')

var bot = mineflayer.createBot({
    host: '82.146.42.193',
    port: 25565,
    username: 'Offeex',
});

bot.loadPlugin(pvp)
bot.loadPlugin(armorManager)
bot.loadPlugin(pathfinder)

bot.on('spawn', () => {
    bot.chat('Я извиняюсь перед новым байкалом я тупая свинья хохлятская всем извините особенно амферо');
});

bot.on('chat', (username, message) => {
    if (message.startsWith('$text')) {
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
        if(username === bot.username) return;
        var text = message.split(' ').slice(1).join(' ');
        var player = bot.players[text]
        if (!player) {
        bot.chat("ну и кого мне пиздить")
        return
    }  
    bot.pvp.attack(player.entity)
    }
    if(message === '$алмазы') {
        if(username === bot.username) return;
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
        if(username === bot.username) return;
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
        bot.pathfinder.setMovements(null); bot.pathfinder.setGoal(null); bot.clearControlStates();
    }
});
