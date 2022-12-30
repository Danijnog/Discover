# Posicionamentos
    Controlar onde o elemento ira ficar na pagina, alterando o fluxo
    normal dos elementos

    - name: position
    - value: static | relative | absolute | fixed

## Relative
    - top, right, bottom, left, z-index

## Absolute
    O elemento é deslocado saindo do seu fluxo normal, como se ficasse
    em uma "nova camada". O elemento é posicionado em relacao ao seu parent mais proximo, e se nao existir ele sera posicionado em relacao ao bloco contendo a raiz do elemento.

## Fixed
    O elemento fica fixo, mesmo com o scroll o elemento fica fixo na pagina

## Element stacking
    É o empilhamento dos elementos, e podemos controlar esse empilhamento com o atributo "z-index", determinando a ordem da posicao do elemento.
    quanto maior o z-index, mais "acima" vai aparecer o elemento em relacao aos q estao embaixo dele

{
    <div class = "box box1"> Hello world </div>
    <div class = "box box2">  </div>
    <div class = "box box3">  </div>

    .box {
    width: 100px;
    height: 80px;
    margin: 8px;
    }

    .box1 {
    position: absolute;
    left: 8px;
    top: 8px;
    background-color: #0055ff;
    }

    .box2 {
    position: absolute;
    left: 16px;
    top: 16px;
    background-color: #2200ff;
    }

    .box3 {
    position: absolute;
    left: 32px;
    top: 32px;
    background-color: rgb(7, 50, 120, 0.6)
    }

}