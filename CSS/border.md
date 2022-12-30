# Border
    Bordas da caixa
    - value: <border-style> | <border-width> | <border-color>
    - style: solid, dotted, dashed, double, groove, ridge, inset, outset
    - width: <length>
    - color: <color>

## Exemplo

div {

    border: solid 2px red; /* shorthand */
}

## Outline
difere em 4 sentidos:
    - Nao modifica o tamanho da caixa, pois nao é parte do Box Model
    - Poderá ser diferente de retangular
    - Nao permite ajuste individual
    - Mais usado pelo user agent para acessibilidade

https://developer.mozilla.org/en-US/docs/Web/CSS/border