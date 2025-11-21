// 引用linebot SDK
var linebot = require('linebot');
// 用於辨識Line Channel的資訊
var bot = linebot({ 
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});
// 當有人傳送訊息給Bot時
bot.on('message', function (event) { 
    event.reply(`${event.message.text},我是學你講話的髒髒愛派遣`).then( (data) => {

        }).catch( (error) => {})
});
// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () { console.log('[BOT已準備就緒]');
});