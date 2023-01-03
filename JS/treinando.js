// Interpolando valores com template literals

const nome = 'daniel';
const idade = '20';
console.log(`${nome} tem ${idade} anos!`);

const person = {   //object
    name: 'Daninho',
    age: '79',
    height: 1.79,
    isAdmin: true
}
console.log(person.isAdmin);

const animals = ['Lion', //array
    'Dog', 
    {
        name: 'toquinho',
        age: 2
    }
]
console.log(animals[2]);
console.log(animals.length);

/* ----------Arrow Function---------------------------------- */
const sayMyName = (name) => {
    console.log(name);
}
sayMyName('daniel');

/* ----------Callback Function---------------------------------- */
//callback function é uma funcao q esta sendo passada como parametro p/ outra funcao
function printName(name) {
    console.log(name);
}

printName(
    () => {
        console.log('estou em uma callback')
    }
);

/* ----------Manipulando string---------------------------------- */

//transformar um numero quebrado pra 2 casas decimais e trocar o ponto por ponto e virgula

let number = 293.939239021020919
console.log(number.toFixed(2).replace(".", ";"));

//transformar letras maiusculas e minusculas
{
    let name = 'daniel';
    console.log(name.toUpperCase());
}

//separar um texto que contem espacos em um novo array onde cada texto é uma posicao do array
//Depois disso, transformar o array em um texto e onde era espaço colocar o " _ "

{
    let phrase = "Brincando com javascript";
    let myArray = phrase.split(" ");
    let newPhrase = myArray.join("_");
    console.log(newPhrase);
}

// Verificar se um texto tem a palavra amor

function findWordLove() {
    let phrase = "Javascript é amor";
    let array = phrase.split(" ");
    console.log(array);
    for(var i = 0; i < array.length; i++) {
        if(array[i] === 'amor')
        {
            console.log("Tem a palavra amor");
        }
    }
    return 0;
}
findWordLove();

// OU //

{
    let phrase = "Javascript é amor";
    console.log(phrase.includes("amor"));
}

/* ----------Criando array com construtor---------------------------------- */

{
    let myArray = new Array(10); //array com 10 posicoes vazias
    console.log(myArray);
}

/* ----------Manipulando arrays---------------------------------- */

let techs = ['html', 'css', 'node.js'];

techs.push('react'); //adicionar um item no fim do array (.push)
techs.unshift('sql'); //adicionar um item no comeco do array (.unshift)
//techs.pop(); //remover um item do fim do array
//techs.shift(); //remover um item do comeco do array
//console.log(techs);

//console.log(techs.slice(0, 2)); //pegar alguns elementos do array

techs.splice(1, 2); //remover 1 ou mais itens do array
console.log(techs); 

let index = techs.indexOf('node.js'); //encontrar a posicao de um elemento no array
console.log(index);

let age = new Number(20);
age.Months = 6.4;
console.log(age, age.Months);


//let data = new Date('2023-06-02');
//console.log(data.getDate());