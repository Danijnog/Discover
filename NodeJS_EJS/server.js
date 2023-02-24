const express = require('express'); //utilizando o express pra criar o servidor
const app = express(); //instanciando o express

app.set("view engine", "ejs"); //estamos falando pro express q a ferramente q vamos utilizar é o view engine pra renderizar o ejs

app.get("/", function(req, res) { //estamos criando uma rota pra renderizar o index
    const items = [
        {
            title: "A", message: "Gosto de codar"
        },
        {
            title: "B", message: "Brincando com JS e nodeJS nas ferias"
        },
        {
            title: "C", message: "EJS usa Javascript pra renderizar HTML"
        }
    ]

    const subtitle = "EJS é uma linguagem de modelagem para criação de páginas HTML utilizando Javascript (puxando essa info do server.js)";
    res.render("pages/index", {items: items, subtitle: subtitle}); //vamos renderizar o index e também estamos recebendo o array items e apontando que vamos utilizar este array na view como itens
})

app.listen(7070, function() { //estamos falando pro servidor rodar na porta 8080
    console.log("Listening on port 7070");
})

app.get("/about", function(req, res) {
    res.render("pages/about");
})

