# Background

Possui muitas propriedades, tais como:
    - color, image, repeat, position, size, origin, clip, attachment, linear-gradient

## Exemplo:
div {
  height: 200px;
  padding: 16px;
  font-size: 32px;
  color: rgb(255, 255, 255);
  border: dashed red 8px;

  background-color: rgb(20, 50, 75);
  background-image: url(https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-origin: content-box;
  background-clip: padding-box;
  //background: linear-gradient(red, hsl(30, 50%, 50%));
  
}

Podemos tambem fazer um shorthand agrupando todas as propriedades:

 background: rgba(20, 50, 72, 0.4) url(https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg) no-repeat center / 100px content-box;

quando formos declarar o background-size no shorthand precisamos por a " / " antes