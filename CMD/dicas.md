# Dicas para o terminal

    - Ctrl + A -> vai pro inicio da linha
    - Ctrl + E -> vai pro final da linha
    - Ctrl + U -> limpa a linha
    - Ctrl + K -> remove do cursor ate o final da linha
    - Ctrl + setinhas -> pula palavras
    - Alt + K -> apaga a palavra inteira
    
    manual dos comandos -> man (comando aqui)
     - por exemplo: man ls -> vai mostrar o que o comando 'ls' faz e pra que serve

    - apropos "list"
    O apropos tbm ajuda pois nele buscamos algum comando a partir de algo que o comando faz, qnd n lembramos o nome do comando

    'file' -> visualiza o tipo do arquivo e as informacoes dele
    'stat' -> visualiza o dono, tamanho e modificacoes do arquivo
    'touch' -> serve para criar um ou mais arquivos desejados, ou atualizar o registro de data e hora de arquivos ja criados

    'mv' -> comando q pode ser utilizado para mover e renomear arquivos
        - p/ mover:
            'mv File Destino'
        - p/ mover multiplos arquivos:
            'mv pasta1 pasta2 pasta3 pastaDestino'
        - p/ renomear arquivos:
            'mv file.txt arquivo.txt'
    
    'rm' -> comando para remover totalmente arquivos ou pastas
        - p/ remover diretorio
            'rm -r nomeDoDiretorio'
        - p/ remover diretorio dando permissao para deletar algo
            'rm -rf nomeDoDiretorio'

## Wildcards (curingas)
    '*' -> pega todos os próximos caracteres
    '?' -> pega 1 caracter
    por exemplo:
        mv sites/si* sites2 -> irá mover todos os arquivos q começam com 'si' da pasta sites para a pasta sites2

## Find
    serve para encontrar arquivos ou diretorios

    find <path> arg [expression]
        -type <d|f>
        -name
    
    exemplo: find . -type f -name "*.md"
    -> encontre nesse diretorio todos os arquivos do tipo file q terminam com .md

## Ver conteúdo de arquivos
    'less' -> printa o conteudo no terminal, porem vc tem q dar o exit no final apertando 'q'
    'cat' -> printa de uma vez e deixa o conteudo do arquivo no terminal

## Editar arquivos
    'nano' -> para sair da edição, usa-se o comando ctrl x
'vim' -> para sair da edição, usa-se o comando :q