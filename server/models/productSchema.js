const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    'id': String,
    'productName': String,
    'productStatus': Boolean,
    'productSketch': String,
    'productDetail': String,
    'productDetailHTML': String,
    'productPrice': Number,
    'productType': String,
    'productCounts': Number,
    'productImg1': String,
    'productImg2': String,
    'productImg3': String,
    'productImg4': String,
    'isDelete': Boolean,
    'remark': String
}, { versionKey: false })

module.exports = mongoose.model('product', productSchema, 'product')