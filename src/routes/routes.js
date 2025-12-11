const express = require('express');
const router = express.Router();
const EstudanteDAO = require('../DAO/EstudanteDAO');

router.post('/notas/inserir', EstudanteDAO.cadastrar);
router.delete('/estudante/excluir/:nome', EstudanteDAO.excluir);
router.get('/estudante', EstudanteDAO.listar);
router.post('/estudante/alterar/:nome', EstudanteDAO.alterar);
module.exports = router;