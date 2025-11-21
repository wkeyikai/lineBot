// 引用linebot SDK
var linebot = require('linebot');
const express = require('express');

const app = express();
app.post('/linewebhook', bot.parser());

// 用於辨識Line Channel的資訊
var bot = linebot({ 
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const PORT = process.env.PORT || 3000;

console.log('channelId',process.env.CHANNEL_ID,)

// 當有人傳送訊息給Bot時
bot.on('message', function (event) { 
    event.reply(`${event.message.text},我是學你講話的髒髒愛派遣`).then( (data) => {

        }).catch( (error) => {})
});
// Bot所監聽的webhook路徑與port
// bot.listen('/linewebhook', PORT, function () { console.log('[BOT已準備就緒]');
// });
app.post('/linewebhook', bot.parser());

app.listen(PORT, () => console.log(`Bot running on port ${PORT}`));
