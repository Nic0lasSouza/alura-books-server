const fs = require("fs");

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivrosPorId(id){
    const livros  = JSON.parse(fs.readFileSync( "livros.json"));//pegar todos os valores
    const livroFiltrado = livros.filter(livro => livro.id === id)[0];
    //[{id: 2, nome: "livro irado"}]
    return  livroFiltrado;

}

function insereLivro(livroNovo){
    const livros  = JSON.parse(fs.readFileSync( "livros.json"));//pegar todos os valores

    const nolaListaDeLivros = [...livros, livroNovo] // lista com todos os livros... , mais o livro novo

    fs.writeFileSync("livros.json", JSON.stringify(nolaListaDeLivros)) // manipula o json e cria mais um livro no arquivo
}

module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro
};