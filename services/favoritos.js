const fs = require("fs");
const livros  = JSON.parse(fs.readFileSync( "favoritos.json"));//pegar todos os valores

function getTodosFavoritos(){
    return livros;
}

function deletaFavoritoId(id){
    const livrosFiltrados = livros.filter(livro => livro.id !== id) //tirar o item que tem o id que foi recebido
}

module.exports={
    getTodosFavoritos, //exporta a função que retorna todos os favoritos
}