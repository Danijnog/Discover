# Basic font properties
    - font-family
    - font-weight
    - font-style
    - font-size

## Web Fonts
    fontes do sistema  x  fontes da web
    como usar fontes para web?
        - @font-face
        - @import
        - link

## font-variant
    variacoes na apresentacao da fonte
    https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

## font-stretch
    alargamento ou encolhimento da fonte
    aceita palavras-chave como: expanded, condensed, normal
    aceita porcentagens de 50% a 200%

## letter-spacing
    espaços entre os caracteres

## word-spacing
    espaços entre as palavras

## line-height
    espaços entre as linhas
    pode ser com unidades de medida ou sem

## text-transform
    transformacao do texto
    ```css
    p {
        text-transform: uppercase; /*capitalize | lowercase | none */
    }

## text-decoration
    aparencia decorativa de um texto
    line: underline | overline | line-through

    style: wavy | dotted | double | dashed | solid
    color: `<color>` values

## text-align
    alinhamento de um texto
    valores: start | end | left | right | center | justify | match-parent

## text-shadow
    sombra aplicada a um texto
    permite multiplos valores
    ```css
    p {
        text-shadow: 1px 1px 1px red,
                    2px 2px 1px green; /*offset-x | offset-y | blur-radius | color */
    }
    ```

## Shorthand
    Podemos usar o shorthand font para determinar os seguintes valores: 
    
    ```css
    /*font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family */
p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```