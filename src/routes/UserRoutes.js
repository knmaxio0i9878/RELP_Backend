const router = require('express').Router()
const userController = require('../controller/UserController')

router.get('/users',userController.getUsers)
router.post('/adduser',userController.addUser)
router.delete('/deleteuser/:id',userController.deleteUser)
router.put('/updateuser/:id',userController.updateUser)
router.get('/singleuser/:id',userController.getSingleUser)
router.post('/upload',userController.uploadFile)
router.post('/login',userController.loginUser)

module.exports = router;