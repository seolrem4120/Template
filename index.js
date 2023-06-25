// discord.js 라이브러리 호출
const { Client, Intents, Collection } = require("discord.js");
// fs 모듈 호출
const fs = require("fs");
// client 객체 생성
const client = new Client({ intents: 32767 });

// config.json 호출
client.config = require("./config.json");

// 봇과 서버를 연결해주는 코드
client
  .login(client.config.token)
  .catch((e) => console.log("No token provided"));

// commands 콜렌셕 추가
client.commands = new Collection();
// aliases 콜렉션 추가
client.aliases = new Collection();
// slash 콜레션 추가
client.slash = new Collection();

// handlers 파일 안에 있는 commands, events, slash  호출
["commands", "events", "slash"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});
