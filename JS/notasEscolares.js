/* Crie um algoritmo que transforme as notas do sistema numerico
para sistema de notas em caracteres tipo A B C

    * de 90 p/ cima - A
    * de 80 - 89 - B
    * de 70 - 79 - C
    * de 60 - 69 - D
    * menor que 60 - F
*/

function transformarNotaEscolar(nota) {
    let stringNota = "";
    switch(true) {                              //tentei por (switch(nota)) mas da erro, pois o switch compara valores booleanos,
                                                //no caso ele ira comparar o resultado da expressao do 'case' (que é um true or false) com o valor do 'switch'
                                                //https://pt.stackoverflow.com/questions/418468/usar-switch-para-testar-se-um-valor-est%C3%A1-entre-uma-faixa-de-valores
        case (nota >= 90 && nota <= 100):
            stringNota = "A";
            break;

        case (nota >= 80 && nota <= 89 ):
            stringNota = "B";
            break;

        case (nota >= 70 && nota <= 79 ):
            stringNota = "C";
            break;
        
        case (nota >= 60 && nota <= 69):
            stringNota = "D";
            break;
        
        case (nota < 60 && nota >= 0):
            stringNota = "F"; 
            break;
        
        default:
            console.log('Nao foi possivel transformar a nota');
            break;
    }
    return stringNota;
}
console.log(transformarNotaEscolar(80));

/* -------------- Sistema de gastos familiar ----------------------- */

const revenue = {
    income: ['salario', 'bico'],
    outcome: ['conta de luz', 'alimentacao', 'roupas', 'celular']
}

revenue.income[0] = 1080;
revenue.income[1] = 50;

revenue.outcome[0] = 75;
revenue.outcome[1] = 253.4;
revenue.outcome[2] = 350.910;
revenue.outcome[3] = 14;

function sum(array) {
    let total = 0;
    for(elements of array)
        total = total + elements;
    return total;
}

function familyExpenses() {
    const valueIncomes = sum(revenue.income);
    const valueOutcomes = sum(revenue.outcome);

    let result = valueIncomes - valueOutcomes;
    if(result < 0) 
        console.log("Sua familia esta com saldo negativo");
    else if(result == 0)
        console.log("Sua familia esta no limite!");
    else
        console.log("Sua familia esta com saldo positivo");

    return `Saldo: ${result.toFixed(2)} R$`;
}

console.log(familyExpenses());