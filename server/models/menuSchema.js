const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
  'id': String,
  'pId': String,
  'articleId': String,
  'title': String,
  'hasContent': Boolean,
  'articleTitle': String,
  'createTime': {
    type: Date,
    default: new Date()
  },
  'updateTime': Date,
  'remark': String
}, { versionKey: false })

module.exports = mongoose.model('menu', menuSchema, 'menu')