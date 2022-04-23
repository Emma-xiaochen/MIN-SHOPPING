const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    'id': String,
    'loginName': String,
    'nickName': String,
    'password': String,
    'address': String,
    'isDelete': Boolean,
    'remark': String
}, { versionKey: false })

module.exports = mongoose.model('user', userSchema, 'user')