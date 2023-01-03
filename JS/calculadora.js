//switch

function calculator(number1, number2, operator) {
    let result = 0;
    switch(operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        default:
            console.log("não foi possivel realizar a operacao");
            break; 
    }
    return result;
}

console.log(calculator(2, 2, '/'));

//throw, try, catch
function sayMyName(name = "") {
    if(name === "")
        throw new Error('Nome é obrigatório');
    else
        console.log(name);
}

try {
    sayMyName()
} catch(e) {
    console.log(e);
}

// for...of
let string = 'Daniel';
let names = ['Joaozinho', 'Pedrinho'];

for(let char of string) {
    console.log(char);
}

for(let elements of names) {
    console.log(elements);
}

// for...in (vai criar um loop em cima de um objeto)

let person = {
    name: 'Andrea',
    age: 23,
    weight: 50
}
for(let property in person) {
    console.log(property);
    console.log(person[property])
}