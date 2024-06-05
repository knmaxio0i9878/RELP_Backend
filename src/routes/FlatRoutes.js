const router = require('express').Router()
const flatController = require('../controller/FlatController')

router.get('/getflat',flatController.getAllFlat)
router.post('/insertflat',flatController.addFlat)
router.delete('/deleteflat/:id',flatController.deleteFlat)
router.put('/updateflat/:id',flatController.updateFlat)
router.get('/singleflat/:id',flatController.getSingleFlat)

module.exports = router;