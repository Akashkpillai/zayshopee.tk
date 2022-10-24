const {Router} = require("express");
const express = require("express");
const services = require("../controller/render");
const store = require("../middlewares/multer")

const router = express.Router();

router.get("/admin_login", services.adminLoggedOut, services.adminLogin);
router.post("/admin_login", services.adminSignIn);

router.get("/user-management", services.adminLoggedIn, services.adminUsers);

router.get("/admin_panel", services.adminLoggedIn, services.adminPanel);
router.get("/admin_logout", services.adminLogout);

router.post("/admin_panel/user-management/block", services.userBlock);
router.post("/admin_panel/user-management/unblock", services.userUnblock);

router.get("/product", services.proMan)
router.get("/add_product", services.addPro)
router.get("/admin_panel/edit-product", services.editProduct)
router.get("/admin_panel/delete-product", services.deleteProduct)


router.post("/admin_panel/add-product", store.any(), services.addProduct)
router.post("/admin_panel/add-product/update", store.any(), services.updateProduct)

router.get('/category-management', services.category)
router.post('/admin-panel/category', services.cateman)
router.post('/admin/delete-category', services.deleteCategory)

router.get('/admin-order', services.adminLoggedIn, services.viewOrder)
router.get('/admin-order/view-products', services.adminLoggedIn, services.viewOrderProduct)
router.get('/admin-order/comfirm', services.adminLoggedIn, services.confirmedOrder)
router.get('/admin-order/cancel-order', services.canceledorder)
router.get('/admin-order/delivered', services.adminLoggedIn, services.deliveredOrder)

router.get('/admin-order/orderconfirmed', services.confirmedOrders)
router.get('/admin-order/deliverorder', services.deliverOrder)
router.get('/admin-order/cancelOrder', services.canceledOrder)
// router.get('/admin-order/pendingorder',services.pendingOrder)

router.get('/home/coupen', services.adminCoupen)
router.post('/coupen/add-coupen', services.addCoupon)
router.post('/coupen/delete-coupon', services.deleteCoupon)

router.get('/admin/exportExcel', services.exportExcel)


router.post('/test', services.test);


module.exports = router;
