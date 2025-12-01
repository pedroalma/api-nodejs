const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controll');


router.get('/', UserController.listUsers); //GET - listar 
router.get('/:id', UserController.getUser); //GET - listar por id
router.post('/', UserController.createUser); //POST - criar
router.put('/:id', UserController.updateUser); //PUT - atualizar
router.delete('/:id', UserController.deleteUser); //DELETE - deletar

module.exports = router;