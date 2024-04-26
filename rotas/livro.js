const { Router } = require ("express");
const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require("../controladores/livro");

const router = Router();

router.get('/', getLivros); // mostrar todos os livros

router.get('/:id', getLivro); //mostrar somente um livro na busca

router.post('/', postLivro); //adicona livro novo


router.patch('/:id', patchLivro) //modificar  dados de um livro específico


router.delete('/:id', deleteLivro)// deletar um dado de um livro escolhido

module.exports = router