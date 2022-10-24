const express = require('express')
const services=require('../controller/render')
const router=express.Router()
const store = require("../middlewares/multer")
const { route } = require('./adminRouter')

router.get('/user_login', services.isLoggedOut,services.loginRouter)
router.post('/user_login',services.login)

router.get('/user_signup',services.userSignup)
router.post('/user_signup',services.signup)

router.get('/user_home',services.isLoggedIn,services.userHome)
router.get('/user_logout', services.logout)

router.get('/mobile_verification',services.isLoggedOut,services.otpVerification)
router.get('/verifyOtp',services.isMobileFound,services.verifyOtpPage)
router.post('/verifyOtp',services.verifyOtp)
router.post('/user/send-otp',services.sendOtp)

router.get('/user_shop',services.isLoggedIn,services.userShop)
router.get('/user_cart',services.isLoggedIn,services.cart)
router.get('/view_product',services.viewProduct)

router.get('/watches',services.shopWatches)
router.get('/shoes',services.shopShoes)
router.get('/accessories',services.shopaccess)


router.get('/user_profile',services.isLoggedIn,services.userProfile)
router.get('/user_home/profile-edit',services.isLoggedIn,services.editpro)
router.post('/user_home/profile-edit',store.any(),services.profileEdit)

router.get('/Wishlist',services.wishList)
router.get('/user_wishlist',services.userWishList)
router.get('/delete_wishlist:id',services.deleteWishlist)


router.post('/user_shop/addToCart',services.isLoggedIn,services.addToCart)
router.post('/addToCart/cart-operation',services.isLoggedIn,services.cartOperation)
router.get('/delete-from-cart',services.deleteFromCart)

router.get('/user-checkout',services.isLoggedIn,services.checkout)

router.get('/user-address',services.newAddress)
router.post('/user-address/add-address',services.isLoggedIn,services.addAddress)


router.post('/user_home/shopping-cart/checkout/payment',services.isLoggedIn,services.payment)

router.get('/razorpay',services.isLoggedIn,services.razorpay)

router.get('/payment/purchase',services.isLoggedIn,services.purchase)
router.get('/paypal',services.paypal)


router.get('/profile/orders',services.isLoggedIn,services.orderUser)
router.get('/profile/orders/view',services.isLoggedIn,services.viewOrders)
router.get('/profile/cancelorder',services.cancelUserOrder)
router.get('/profile/delete/order',services.userdDeleteOrder)

router.get('/page-not-found',services.errorPage)

router.post('/cart/apply-coupon',services.isLoggedIn,services.applyCoupon)



// router.post('/checkout/payment',services.isLoggedIn,services.userPayment)








module.exports=router