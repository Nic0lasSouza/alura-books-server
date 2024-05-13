const fs = require("fs");

function getTodosCategoria(){
    return JSON.parse(fs.readFileSync("livros"))
}

module.exports ={
    getTodosCategoria
}