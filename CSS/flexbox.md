# Flexbox
    Nos permite posicionar os elementos dentro da caixa
    Controle em uma dimensao (horizontal ou vertical)
    Alinhamento, direcionamento, ordernar e tamanhos

```css
div.parent {
    display: flex;
}
```

## Flex-direction
    direcao do flex: horizontal ou vertical

    flex-direction: column;  |  flex-direction: row;

## Alinhamento
    atributos:
        justify-content: space-between;
        align-items: center;

```html e css
<div class = "pai">
  <div class="box blue"> </div>
   <div class="box red"> </div>
   <div class="box green"> </div>
</div>

body {
  height: 100vh;
  margin: 0px;
  display: flex;
  align-items: center;
}


.pai {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 100px;
  height: 100px;
  margin: 8px;
}

.blue {
  background-color: blue;
}
.red {
  background-color: red;
}

.green {
  background-color: green;
}
```