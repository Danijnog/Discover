# Box Models
    - Ideal para fazer layoutes p/ web
    - Maior facilidade pra aplicar o CSS

## Como é?
    - Caixa retangular com as propriedades:
        Tamanho (width x height)   
        conteúdo    (content)
        bordas      (border)
        preenchimento interno   (padding)
        espaços fora da caixa   (margin)

## display: block  x  display: inline
    - como as caixas se comportam em relacao as outras caixas
    - comportamento externo das caixas
{
    BLOCK: ocupa toda a linha, colocando o proximo elemento abaixo desse
            width e height sao respeitados
            padding, margin e border irao funcionar normalmente
}

{
    INLINE: elemento ao lado do outro
            width e height nao funcionam
            somente valores horizontais de margin, padding e border funcionam
}