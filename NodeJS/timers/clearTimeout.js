const timeOut = 3000;
var finished = function() {
    console.log('Executando a funcao de callback apos 3 segundos');
};
const timer = setTimeout(finished, timeOut);
clearTimeout(timer); //vai cancelar o Timeout da const timer