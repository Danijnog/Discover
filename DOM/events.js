// Eventos
function print() {
    console.log('print');
}

const input = document.querySelector('input');
input.onkeydown = (text) => {
    console.log(text.timeStamp);
}

const h1 = document.querySelector('h1');
h1.addEventListener('click', print);