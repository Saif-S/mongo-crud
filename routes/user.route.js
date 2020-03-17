const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.post('/add', userController.Create);
router.delete('/delete/:id', userController.Delete);
router.put('/update/:id', userController.update);

module.exports = router