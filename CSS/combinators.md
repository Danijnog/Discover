# Combinators

Combinadores trabalham para buscar e combinar seletores a fim de aplicar
uma estilizacao

## Descendant Combinator
    - identificado por um espaco entre os seletores
    - busca um elemento dentro de outro

``` css
body article h2 {
    color: green;
}
```

## Child Combinator
    - identificado pelo sinal '>' entre dois seletores
    - seleciona somente o elemento q é filho direto do pai
    - elementos depois do filho direto serao desconsiderados

``` css
body > ul > li {
    color: blue;
}
```

## Adjacent sibling combinator
    - Identificado pelo sinal '+' entre 2 seletores
    - Seleciona o irmão direto do elemento na hierarquia

``` css
h1 + p {            //vai selecionar o 'p' q ta do lado de 'h1'
    color: red;
}
```

## General sibling combinator
    - Identificado pelo sinal '~' entre 2 seletores
    - Seleciona todos os elementos irmaos

``` css
h1 ~ p {       //seleciona todos os elementos 'p' q tiverem do lado de'h1'
    color: grey;
}
```

## Utilizando combinadores
``` css
ul > li[class="red"] {
    color: red;
}
```

## Dica
    - Combinadores muito especificos podem dificultar o codigo e o reuso das estilizacoes ao inves de facilitar
    - Muitas vezes, uma estilizacao menos especifica e o uso de classe torna o trabalho mais eficiente