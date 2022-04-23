const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    'id': String,
    'userId': String,
    'cartObj': Array,
    'isDelete': Boolean,
    'remark': String
}, { versionKey: false })

module.exports = mongoose.model('user', userSchema, 'user')