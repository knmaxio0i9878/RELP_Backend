const router = require('express').Router()
const todolist = require('../controller/ToDoController')

router.get('/lists',todolist.getAllList)
router.post('/addlist',todolist.addList)


module.exports = router;