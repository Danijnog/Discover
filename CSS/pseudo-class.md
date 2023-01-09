# Pseudo-classes
    É um tipo de seletor que ira selecionar um elemento que estiver em um estado especifico.

    ex: É o primeiro elemento dentro de uma caixa, ou o elemento esta onHover.
https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes

## Selecionando elementos com pseudo-classes

    - :first-child
    - :nth-of-type()
    - :nth-child()

Exemplo:
    html
        <ul>
            <h3>
                <li>Alo</li>
                <li>Mundo</li>
                <li>Bão?</li>
            </h3>
        </ul>
```css
ul li:nth-of-type(2) {    //vai pegar o 2 elemento de li (Mundo)
    color: blue;
}

ul li:nth-child(odd) { //vai aplicar essa propriedade nos filhos impares
    color:grey;             //even - numeros pares
                            //odd - numeros impares
}