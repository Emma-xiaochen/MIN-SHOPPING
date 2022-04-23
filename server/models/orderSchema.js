const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    'id': String,
    'orderNumber': String,
    'orderStatus': String,
    'orderObj': Array,
    'isDelete': Boolean,
    'remark': String
}, { versionKey: false })

module.exports = mongoose.model('order', orderSchema, 'order')