// Criando e adicionando elementos

// createElement
{
    const div = document.createElement('div');
    div.innerText = 'Hello world!';

    //agora vamos adicionar essa div no body
    const body = document.querySelector('body');
    body.append(div);
}

//insertBefore
{
    const div = document.createElement('div');
    div.innerText = 'alo dev';

    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    body.insertBefore(div, h1.nextSibling); //o insertBefore vai funcionar como um 'insertAfter' com o '.nextSibling'
}
