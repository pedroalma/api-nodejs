const express = require('express');
const router = express.Router();
const ProdController = require('../controllers/prod.controll');

router.get('/', ProdController.listprod); //GET - listar
router.get('/:id', ProdController.getUser); //GET - listar por id
router.post('/', ProdController.createUser); //POST - criar
router.put('/:id', ProdController.updateUser); //PUT - atualizar
router.delete('/:id', ProdController.deleteUser); //DELETE - deletar
module.exports = router;