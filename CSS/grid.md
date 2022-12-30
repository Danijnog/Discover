# Grid
    posicionamento dos elementos dentro da caixa
    horizontal e vertical ao mesmo tempo
    pode ser flexível ou nao
    cria espaço para os elementos filhos habitarem

## Atributos
    ```css
        grid-template-areas:
        "1 2"                   /* -> 1a linha */
        "1 2"                   /* -> 2a linha */
        "1 2";                  /* -> 3a linha */
    ```

    ```css e html

<body>
  
  <header> Header </header>
  <main> Corpo </main>
  <aside> Infos adicionais </aside>
  <footer> Rodapé </footer>

</body>

body {
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
}


header {
  grid-area: header;
  background-color: red;
}

main {
  background-color: blue;
}

aside {
  background-color: green;
}

footer {
  grid-area: footer;
  background-color: violet;
}

```