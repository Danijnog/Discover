const { EventEmitter } = require('events'); //dessa forma vamos utilizar o modulo de eventos
const ev = new EventEmitter();

ev.on('say ma name', (message) => { //dessa forma vamos ouvir o evento
    console.log(message);
});
ev.emit('say ma name', 'daniel'); //estamos emitindo o evento
