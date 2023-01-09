# Terminologia

- Flex Container
    - flex item

- Nesting (é elementos que contem outros elementos)

- Axis
    - main
        - start, end
    - cross
        - start, end

- Flex sizing
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container
    ```css
    .item {
        flex: 1;
    }
    ```

## flex-wrap
    - podemos usar multi linhas
    - cada nova linha, um novo flex container
    - o flex-wrap move os elementos pra novas linhas em baixo se os elementos nao couberem na tela 
    ```css
    .container {
        flex-wrap: wrap;
    }
    ```

## flex-flow
    - shorthand
    - juntamos o flex-direction e o flex-wrap
    ```css
    .container {
        flex-flow: row wrap;
    }
    ```

## justify-content
    - alinhamento dos elementos dentro do container
    - distribuição dos elementos

    VALORES:
        - flex-start;
        - flex-end;
        - center;
        - space-around;
        - space-between;
        - space-evenly;

## align-items
    - alinhamento dos elementos no eixo cruzado

    VALORES:
        - stretch;
        - flex-start;
        - flex-end;
        - center;

HTML:
<div class="container">
  <div class="item">
    Item 2
  </div>
  <div class="item">
    Item 1
  </div>
</div>

```css
.container{
  display: flex;
  border: 0.5px solid red;
  height: 100vh;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
.container div {
  border: 1px solid;
  width: 400px; 
}
```
