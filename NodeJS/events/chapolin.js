const { inherits } = require('util'); //serve para herdar algo de outra classe
const { EventEmitter } = require('events');

// function Character(name) {
//     this.name = name;
// }
// inherits(Character, EventEmitter); //Character vai herdar as propriedades de EventEmitter

class Character extends EventEmitter { //essa classe serve para herdar as propriedades de EventEmitter, equivale a função acima e ao 'inherit' acima
    constructor(name) {
        super();
        this.name = name;
    }
}

console.log('Oh! E agora, quem poderá me defender?');
const chapolin = new Character('Chapolin Colorado');

chapolin.on('help', () => {
    console.log(`Eu o ${chapolin.name}`)
})
chapolin.emit('help');