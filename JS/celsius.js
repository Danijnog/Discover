/* Celsius em fahrenheit

    Crie uma funcao que receba uma string em celsius ou 
    fahrenheit e faca a transformacao de uma unidade pra outra

    C = (F - 32) * 5/9;
    F = C * 9/5 + 32;
*/

// function celsiusToFahrenheit(typeTemperature, value) { //ESTA FUNCIONANDO, porem fiz da forma de baixo também onde usa novas ideias
//     let celsius = 0;
//     let fahrenheit = 0;
//     let finalValue = 0;

//     if(typeTemperature.toLowerCase() === 'fahrenheit')
//     {
//         celsius = (value - 32) * 5/9;
//         finalValue = celsius + 'C';
//     }

//     else if(typeTemperature.toLowerCase() === 'celsius')
//     {
//         fahrenheit = (value * 9/5) + 32;
//         finalValue = fahrenheit + 'F';
//     }
//     else
//         throw new Error("Entrada invalida! Digite o tipo da temperatura que quer transformar em 'celsius' ou 'fahrenheit");

//     return finalValue;
// }

// try {
//     console.log(celsiusToFahrenheit('CELSIUS', 50));
//     celsiusToFahrenheit('farenaittttt', 20);
// } catch(error) {
//     console.log(error);
// }

function transformDegree(temperature) {
    let celsiusExists = temperature.toUpperCase().includes('C'); //checar se contem a letra C de celsius na string temperatura, retorna um booleano
    let fahrenheitExists = temperature.toUpperCase().includes('F'); //checar se contrem a letra F de fahrenheit na string temperatura, retorna um booleano

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists) 
        throw new Error("Por favor, passe a letra correta para fahrenheit (F) e celsius (C)");

    // C -> F
    let degreeSign = '';
    let result = '';
    let updatedTemperature = Number(temperature.toUpperCase().replace('C', '')); //isso é para removermos a letra C da temperatura q é passada como parametro
                                                                                    // (nesse caso vai ser o celsius, por ex 40C, e transformar em um numero para ser usado na arrow function)
    let newTemperature = (celsius) => (celsius * 9/5 + 32)
    degreeSign = 'F';
    result = newTemperature(updatedTemperature) + degreeSign;
    
    // F -> C
    if(fahrenheitExists) {
        newTemperature = (fahrenheit) => ((fahrenheit - 32) * 5/9);
        updatedTemperature = Number(temperature.toUpperCase().replace('F', ''));
        degreeSign = 'C';
        result = newTemperature(updatedTemperature) + degreeSign;
    }
    return result;
}

try {
    console.log(transformDegree('104F'));
    console.log(transformDegree('40C'));
    console.log(transformDegree('40AB'));
} catch(error) {
    console.log(error);
}
