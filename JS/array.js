/* Buscando e encontrando dados em arrays 

    Baseado no array de livros por categoria abaixo, faça a seguinte proposta:
        - Contar o numero de categorias e o numero de livros em cada categoria
        - Contar o numero de autores
        - Mostrar livros do autor Augusto Cury
        - Transformar a funcao acima em uma funcao q ira receber o nome do autor e devolver os livros desse autor   
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books:[
        {
            title: "Os segredos da mente milionaria",
            author: "T. Harv Eker",
        },
        {
            title: "O homem mais rico da babilonia",
            author: "George S. Clason",
        },
        {
            title: "Pai rico, pai pobre",
            author: "Robert T. e Sharon L.",
        },
    ],
    },
    {
        category: "Inteligencia emocional",
        books: [
            {
                title: "Voce é substituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length; //total de categorias

for(let elements of booksByCategory) {
    console.log('Total de livros da categoria: ', elements.category);
    console.log(elements.books.length);
}

/* ---------- Contar o numero de autores ------------ */
function countAuthors() { 
    let authors = [];

    for(let elements of booksByCategory) {
        for(let properties of elements.books) {
            if(authors.indexOf(properties.author) == -1) //verifico se dentro do array tem algum elemento q tem o nome do autor desse livro, para nao repetir o autor
                authors.push(properties.author);
          
        }
    }
    console.log("Total de autores: ", authors.length);
}
countAuthors();

/* ---------- Mostrar os livros de augusto cury ------------ */ 
function booksOfAugustoCury() {
    let books = [];

    for(let elements of booksByCategory) {
        for(let properties of elements.books) {
            if(properties.author === 'Augusto Cury')
                books.push(properties.title);
        }
    }
    console.log("Livros do autor Augusto Cury: ",books);
}

booksOfAugustoCury();

/* ------Transformar a funcao acima em uma funcao q ira receber o nome do autor e devolver os livros desse autor ----- */

function booksOfAnyAuthor(author) {
    let books = [];

    for(let elements of booksByCategory) {
        for(let properties of elements.books) {
            if(properties.author === author)
                books.push(properties.title);
        }
    }
    console.log(`Livros do autor: ${author} ------ ${books.join("; ")}`);
}

booksOfAnyAuthor('Augusto Cury');
