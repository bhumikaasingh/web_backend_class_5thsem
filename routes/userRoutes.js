const router=require('express').Router()
const userControllers=require('../controllers/userControllers')
// Make a cate user API
router.post('/create',userControllers.createUser)

//login user api
router.post('/login',userControllers.loginUser)

// Forgot password
router.post('/forgot-password', userControllers.forgotPassword)
//controllers-Routes-Index.js(yesari connect hunxa file haru)

//exporting
module.exports=router;