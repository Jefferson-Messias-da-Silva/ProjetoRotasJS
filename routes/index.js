const express = require("express");
//Rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();

router.get('/', (req,res) => { //Primeira rotta//funçaõ  anonima//dois parametoros
    let obj={
        nome:req.query.nome,
    };
    res.render('home',obj);
});

module.exports = router;