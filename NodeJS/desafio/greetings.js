const getFlag = require("./export.js")

console.log(`Oi ${getFlag('--name')}, ${getFlag('--saudacao')}`);
//pra rodar no terminal: 'node greetings --name "daniel" --saudacao "como vai vc"