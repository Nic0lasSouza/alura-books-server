const { getTodosFavoritos, insereFavorito, deletaFavoritoId } = require("../services/favoritos");

function getFavoritos(req, res){
    try {
        const livros = getTodosFavoritos() ;
        res.send(livros);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function postFavorito(req,res) {
    try{
        const id = req.params.id;
        insereFavorito(id);
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavorito(req, res) {
    try{
        const id = req.params.id;

        if(id && Number(id)){
            deletaFavoritoId(id)
            res.send("Favorito deletado com sucesso")
        } else{
            res.status(422); //dado não esperado
            res.send("Id invalido")
        }

    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

module.exports={
    getFavoritos,
    postFavorito,
    deletaFavoritoId
}