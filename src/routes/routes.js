const express = require('express');
const router = express.Router();
const EstudanteDAO = require('../DAO/EstudanteDAO');

router.post('/notas/inserir', EstudanteDAO.cadastrar);
router.delete('/notas/excluir/:nome', EstudanteDAO.excluir);
router.get('/notas/listar', EstudanteDAO.listar);
router.post('/notas/alterar/:nome', EstudanteDAO.alterar);
module.exports = router;