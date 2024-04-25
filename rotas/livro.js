const { Router } = require ("express");
const {getLivros, getLivro, postLivro} = require("../controladores/livro")
const router = Router();

router.get('/', getLivros);

router.get('/:id', getLivro); //mostrar somente um livro na busca

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send('Você fez um riquisição do tipo PATCH ')
})


router.delete('/', (req, res) => {
    res.send('Você fez um riquisição do tipo DELETE ')
})

module.exports = router