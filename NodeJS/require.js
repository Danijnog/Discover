//Módulos nativos
const path = require('path');
console.log(path.basename('/home/danijnog/Discover/starter/CMD')); //printa o nome base (CMD) do caminho inserido

//Pegando um modulo q criei em 'exports.js'

const myModule = require("./exports.js");
console.log(myModule);