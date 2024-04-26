const fs = require("fs");
const livros  = JSON.parse(fs.readFileSync( "livros.json"));//pegar todos os valores

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivrosPorId(id){
    const livroFiltrado = livros.filter(livro => livro.id === id)[0];
    //[{id: 2, nome: "livro irado"}]
    return  livroFiltrado;

}

function insereLivro(livroNovo){
    const nolaListaDeLivros = [...livros, livroNovo] // lista com todos os livros... , mais o livro novo

    fs.writeFileSync("livros.json", JSON.stringify(nolaListaDeLivros)) // manipula o json e cria mais um livro no arquivo
}

function modificaLivro(modificacoes, id){
    let livrosAtuais  = JSON.parse(fs.readFileSync( "livros.json"));//pegar todos os valores
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id); //encontrar o indice pelos valores
    const  conteudoMudado = {... livrosAtuais[indiceModificado],  ...modificacoes}; //livrosAtuais [indiceModificado] -> {id: "2", nome:"livro irado"}
    //modificacoes -> {nome: "nome mucho legal"}
    livrosAtuais[indiceModificado]=conteudoMudado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));//transformar o objeto em texto
}

function deletarLivroPorId(id){
    const livrosFiltrados = livros.filter(livro=> livro.id !== id);
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}
module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro,
    deletarLivroPorId
};