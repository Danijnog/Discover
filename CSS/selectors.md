# Selectors
conecta um elemento HTML com o CSS

## Tipos
    - global selector "*"
    - element/type selector "h1, h2, p, div"
    - ID selector "#box, #container"
    - class selector ".texto, .elementocontainer"
    - attribute selector, pseudo-class, pseudo-element, entre outros

### Adicionando CSS
 
    - inline: atributo "style"
    - <style> tag html para inserir o css
    - <link> criar um arquivo css a parte para trabalhar (é o ideal)
    - inline >> <style> >> link

### Especificidade
    cálculo matemático onde cada tipo de seletor e origem do estilo possuem "forças" a serem considerados
    0. Universal selector, combinators e negation pseudo-class 
    1. Element type selector e pseudo-elements
    10. Classes e attribute selectors
    100. ID selector
    1000. Inline

### Regra !important
    não é uma boa pratica, mas torna um seletor o mais forte