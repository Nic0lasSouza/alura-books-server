const fs = require("fs");
const livrosFavoritos  = JSON.parse(fs.readFileSync( "favoritos.json"));//pegar todos os valores
const Livros  = JSON.parse(fs.readFileSync( "livros.json"));

function getTodosFavoritos(){
    return livrosFavoritos;
}

function deletaFavoritoId(id){
    const livrosFiltrados = livrosFavoritos.filter(livro => livro.id !== id); //tirar o item que tem o id que foi recebido

    fs.writeFile('favoritos.json',JSON.stringify(livrosFiltrados)); //limpa o arquivo para escrever novamente
}

function insereFavorito(id){
    const livroInserido = Livros.find(livro => livro.id === id);
    const novaListaDeLivrosFavoritos =[... livrosFavoritos, livroInserido];

    fs.writeFile('favoritos.json',JSON.stringify(novaListaDeLivrosFavoritos));
}

module.exports={
    getTodosFavoritos, //exporta a função que retorna todos os favoritos
    deletaFavoritoId, // deletar livro por id
    insereFavorito     //adicionar um livro aos favoritos
}