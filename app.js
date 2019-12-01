// 引用linebot SDK
var linebot = require('linebot');
// 用於辨識Line Channel的資訊
var bot = linebot({ 
    channelId: '1653596404', 
    channelSecret: '50521ea1485ec4328202be11c98e0bfe', 
    channelAccessToken: 'r+2i0hKVY8OND0+BBt24g3e8sfWo2rD3+kVLQcEV4f2weIPMX9EGpmTowjkQeB2RNUL4PPzHyCd7Ro8dudVUHG3rG2NCIudWi8Z4zbnwTH/VmSdYvburADDHl2y+EkCfl4HP6smfex4IAqfv9mf9mwdB04t89/1O/w1cDnyilFU='
});
// 當有人傳送訊息給Bot時
bot.on('message', function (event) { 
    event.reply(`${event.message.text},我是學你講話的髒髒愛派遣`).then( (data) => {

        }).catch( (error) => {})
});
// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () { console.log('[BOT已準備就緒]');
});