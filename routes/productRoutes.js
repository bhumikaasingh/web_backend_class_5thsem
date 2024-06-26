const router = require('express').Router()
const productController = require('../controllers/productController')
const { authGuard, adminGuard } = require('../middleware/authGuard')
const { route } = require('./userRoutes')
// make a create product API
router.post('/create', productController.createProduct)

// fetch all
//http://localhost:5000/api/product/get_all_product
router.get('/get_all_products', productController.gteAllProducts)

// fetch single product
//If POST, body(data)
router.get("/get_single_product/:id", authGuard, productController.getProduct)

// delete Product
router.delete('/delete_product/:id', adminGuard, productController.deleteProduct)

// update product
router.put('/update_product/:id',adminGuard, productController.updateProduct)

//pagination
router.get('/pagination',productController.productPagination)

//exporting
module.exports = router;