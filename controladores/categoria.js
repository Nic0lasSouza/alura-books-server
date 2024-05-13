const { getTodosCategoria } = require("../services/categoria");

function getCategoria(req, res){
    try {
        const livros = getTodosCategoria() ;
        res.send(livros);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

module.exports ={
    getCategoria
}