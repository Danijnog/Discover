const time = 1000;
const checking = () => {
    console.log('Checking...');
}
var interval = setInterval(checking, time); //setInterval ira rodar uma função N vezes, nesse caso a cada 1 segundo

const clear = () => {
    clearInterval(interval);
}
const timeOut = setTimeout(clear, 3000); //vai rodar o checking ate 3 segundos, e depois vai cancelar

//const timeout = setTimeout( () => clearInterval(interval), 3000);
