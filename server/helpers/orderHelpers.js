const Cart = require("../model/cartScheme");
const Category = require("../model/categoryScheme");
const Coupon = require("../model/coupenScheme");
const Order = require("../model/orderScheme");
const Product = require("../model/productScheme");
const User = require("../model/userScheme");


module.exports = {

    findUser: function (userId) {
        return new Promise((resolve, reject) => {
            User.findOne({email: userId}).then((user) => {
                resolve(user)
            }).catch((err) => {
                reject(err)
            })
        })
    },

    findCart: function (user) {
        return new Promise((resolve, reject) => {
            Cart.findOne({owner: user.email}).then((cart) => {
                resolve([cart, user])
            }).catch((err) => {
                reject(err)
            })
        })
    },

    updateStock: function (items) {
        return new Promise((resolve, reject) => {
            items.forEach(item => {
                let itemQuantity = + item.quantity
                Product.updateOne({
                    _id: item.itemId
                }, {
                    $inc: {
                        stock: - itemQuantity
                    }
                }).then(() => {
                    return
                }).catch((err) => {})
            })
            resolve()
            // reject(err)
        })
    },

    createOrder: function (order) {
        return new Promise((resolve, reject) => {
            let newOrder = new Order(order)
            newOrder.save().then(() => {
                resolve()
            }).catch((err) => {
                reject(err)
            })
        })
    },

    couponUpdate: function (coupon, userId) {
        return new Promise((resolve, reject) => {
            Coupon.updateOne({
                couponCode: coupon.couponCode || ''
            }, {
                $push: {
                    users: userId
                }
            }).then(() => {
                resolve()
            }).catch(() => {
                // let error = new Error()
                reject()
            })
        })
    },

    deleteCart: function (userId) {
        return new Promise((resolve, reject) => {
            Cart.deleteOne({owner: userId}).then(() => {
                resolve()
            }).catch((err) => {
                reject(err)
            })
        })
    },

    findCategory: function () {
        return new Promise((resolve, reject) => {
            Category.find().then((object) => {
                resolve(object)
            }).catch((err) => {
                reject(err)
            })
        })
    }


}
