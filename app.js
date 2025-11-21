// 引用linebot SDK
const { Client, middleware } = require('@line/bot-sdk');

require('dotenv').config();  // 一定要放在最上面

const express = require('express');

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

console.log('process.env.CHANNEL_ACCESS_TOKEN',process.env.CHANNEL_ACCESS_TOKEN)
const client = new Client(config);

const app = express();
app.post('/linewebhook',middleware(config) , async (req, res) => {
  try {
    const events = req.body.events;
    await Promise.all(events.map(async (event) => {
      if (event.type === 'message' && event.message.type === 'text') {
        await client.replyMessage(event.replyToken, {
          type: 'text',
          text: event.message.text + '，我是學你講話的髒髒愛派遣',
        });
      }
    }));
    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
});


const PORT = process.env.PORT || 3000;

console.log('channelId',process.env.CHANNEL_ID)

app.listen(PORT, () => console.log(`Bot running on port ${PORT}`));
