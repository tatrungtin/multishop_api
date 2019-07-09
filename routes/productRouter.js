const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
router.use((req, res, next)=>{
    console.log(`Time :`, Date.now())
    next()
})
router.get('/',productController.findAll)
// router.post('/create',productController.create)
// router.get('/:id',productController.findById)

module.exports = router
