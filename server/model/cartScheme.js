const mongoose = require ('mongoose')
const {ObjectID} = require('bson')

const Schema = mongoose.Schema

const cartSchema = new Schema ({

    owner : {
        type:String,
        required:true
    },
    items: [{
        itemId:{
            type: ObjectID,
            required:true
        },
    productName :{
        type:String,
        required:true
    },
    quantity :{
        type:String,
        required:true,
        min : 1,
        default : 1
    },
   
    price : {
        type: Number
    },

    category :{
        type:String,
        required:true
    },
  
    image1 :{
        type:String,
        required:true
    },
}],

    bill:{
        type:Number,
        required:true,
        default:0
    },
   
    cart : {
        type : Boolean
    }

},{timestamps:true})

const Cart = mongoose.model('Cart',cartSchema)
module.exports = Cart;