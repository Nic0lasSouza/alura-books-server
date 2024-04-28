const fs = require("fs");
const livros  = JSON.parse(fs.readFileSync( "favoritos.json"));//pegar todos os valores

function getTodosFavoritos(){
    return livros;
}

function deletaFavoritoId(id){
    const livrosFiltrados = livros.filter(livro => livro.id !== id) //tirar o item que tem o id que foi recebido

    fs.writeFile('favoritos.json',JSON.stringify(livrosFiltrados)) //limpa o arquivo para escrever novamente
}

function insereFavorito(id){
    
}

module.exports={
    getTodosFavoritos, //exporta a função que retorna todos os favoritos
    deletaFavoritoId
}