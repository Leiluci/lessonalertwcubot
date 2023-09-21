const { Telegraf, Markup } = require('telegraf');

const bot_token = '6669124941:AAHFqFCt0FlrFkWkeq1gkrXESZDZEDPh0Vc';
const bot = new Telegraf(bot_token);

const dataJson = require("./lesson-alert-wcuBot.json");

bot.start((ctx) => {
   
    ctx.reply('Qrup nömrənizi daxil edin.', Markup.inlineKeyboard([

    ]).resize());


});
bot.command('232iting', (ctx) => {
    ctx.reply('subjects', Markup.inlineKeyboard([

    ]).resize());
});




bot.launch();