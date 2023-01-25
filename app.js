//Fazendo a importação do express
const express = require("express");

//Rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();
router.get('/', (req,res) => { //Primeira rotta//funçaõ  anonima//dois parametoros
    res.send('eu consegui ...');
});

//configuração basica do app
const app = express();
app.use('/', router); //foi passado 1 rota pois criamos apenas 1 

module.exports = app; //exportamos o app, pois vamos importa-lo no servidor 