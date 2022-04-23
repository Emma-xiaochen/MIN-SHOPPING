const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    'id': String,
    'title': String,
    'md_content': String,
    'content': String,
    'content_short': String,
    'path': String,
    'anchor': String,
    'status': String,
    'image_uri': String,
    'createTime': Date,
    'updateTime': Date,
    'remark': String
}, { versionKey: false })

module.exports = mongoose.model('article', articleSchema, 'article')