const fs = require("fs");
function getTodosFavoritos(){
    return JSON.parse( fs.readFileSync("favoritos.json") );//pegar todos os valores;
}

function deletaFavoritoId(id){
    const livros = JSON.parse( fs.readFileSync("favoritos.json") );//pegar todos os valores

    const livrosFiltrados = livros.filter( livro => livro.id !== id); //tirar o item que tem o id que foi recebido

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados)); //limpa o arquivo para escrever novamente
}

function insereFavorito(id){
    const livros  = JSON.parse(fs.readFileSync( "livros.json"));
    const livrosFavoritos  = JSON.parse(fs.readFileSync( "favoritos.json"));//pegar todos os valores

    const livroInserido = livros.find(livro => livro.id === id);
    const novaListaDeLivrosFavoritos =[...livrosFavoritos, livroInserido];

    fs.writeFileSync("favoritos.json",JSON.stringify(novaListaDeLivrosFavoritos));
}

module.exports={
    getTodosFavoritos, //exporta a função que retorna todos os favoritos
    deletaFavoritoId, // deletar livro por id
    insereFavorito     //adicionar um livro aos favoritos
}