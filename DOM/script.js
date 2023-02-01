// getElementById() retorna o elemento
{
    const element = document.getElementById('blog-title');
    console.log(element);
}

// getElementsByClassName() retorna um HTMLCollection
{
    const element = document.getElementsByClassName('one');
    console.log(element);
}

// getElementsByTagName() retorna um HTMLCollection
{
    const element = document.getElementsByTagName('h1');
    console.log(element);
}

// querySelector() retorna o elemento //pega o elemento pelo seletor css
{
    const element = document.querySelector('[src]');
    //const element = document.querySelector('meta');
    console.log(element);
}

// querySelectorAll() retorna um Nodelist //pega todos os elementos daquele seletor css
{
    const element = document.querySelectorAll('meta');
    console.log(element);
}

/* ---------------- Manipulando conteúdo ------------------- */
{
    const element = document.querySelector('h1');
    element.textContent += ' Ola devs!'; //dessa forma vai adicionar o texto ola devs
    
    element.innerText = 'alo mundo'; //vai trocar todo o texto de element por alo mundo

    element.innerHTML = ' Testando! <div> hello </div>'; //adicionar html no elemento
}

/* ---------------- Alterando estilos ---------------------- */
{
    const element = document.querySelector('body');
    element.style.backgroundColor = '#383838';
    element.style.color = '#f2f2f2';

    element.classList.add('active'); //se tivesse um style no html de active, o body pegaria esse style, poderia ser uma cor, box, etc
    //classList
    console.log(element.classList);
}

/* ---------------- Navegando pelos elementos ---------------------- */
//parentNode e parentElement
{
    const h1 = document.querySelector('h1');
    console.log(h1.parentNode);
}

//childNodes e children
{
    const el = document.querySelector('body');
    console.log(el.children); //children vai mostrar um HTMLCollection
                            //childNodes leva em conta os espacos vazios e nao é um HTMLCollection
}

//firstChild e firstElementChild
{
    const el = document.querySelector('body'); //firstChild considera o espaço como um texto
    console.log(el.firstElementChild);          //firstElementChild pega realmente o primeiro elemento independente do espaço
}

//lastChild e lastElementChild
{
    const el = document.querySelector('body');
    console.log(el.lastChild);
}

//nextSibling e nextElementSibling
//previousSibling e previousElementSibling