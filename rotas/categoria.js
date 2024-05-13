const {Router} = require("express");
const { getCategoria } = require("../controladores/categoria");

const router = Router();

router.get('/', getCategoria);

module.exports =router