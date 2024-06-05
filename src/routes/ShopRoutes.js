const router = require('express').Router()
const shopController = require('../controller/ShopController')

router.get('/getshop',shopController.getShops)
router.post('/insertshop',shopController.addShops)
router.delete('/deleteshop/:id',shopController.deleteShop)
router.put('/updateshop/:id',shopController.updateShop)
router.get('/singleshop/:id',shopController.getSingleShop)

module.exports = router;