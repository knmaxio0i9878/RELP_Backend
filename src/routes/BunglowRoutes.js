const router = require('express').Router()
const bunglowController = require('../controller/BunglowController')

router.get('/getbunglow',bunglowController.getAllBunglow)
router.post('/insertbunglow',bunglowController.addBunglow)
router.delete('/deletebunglow/:id',bunglowController.deleteBunglow)
router.put('/updatebunglow/:id',bunglowController.updateBunglow)
router.get('/singlebunglow/:id',bunglowController.getSingleBunglow)

module.exports = router;