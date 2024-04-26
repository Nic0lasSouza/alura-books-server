const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro, deletarLivroPorId } = require("../services/livros");

function getLivros(req, res){
    try {
        const livros = getTodosLivros() ;
        res.send(livros);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function getLivro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            //Number(2)-> 2 -> true
            //Number("batata")-> NaN-> false
            const livro = getLivrosPorId(id);
            res.send(livro);
        } else{
            res.status(422); //dado não esperado
            res.send("Id invalido")
        }

    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function postLivro(req,res) {
    try{
        const livroNovo = req.body
        insereLivro(livroNovo);
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function patchLivro(req, res) {
    try{
        const id = req.params.id;
        const body = req.body;

        modificaLivro(body, id)
        res.send("Item modificado com sucesso")

    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function deleteLivro(req, res) {
    try{
        const id = req.params.id;
        deletarLivroPorId(id)
        res.send("Item deletado com sucesso")

    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}