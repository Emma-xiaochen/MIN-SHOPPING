/**
 * 数据库连接
 */
const mongoose = require('mongoose')
const config = require('./index')

mongoose.connect(config.mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('****数据库连接失败****')
})

db.on('open', () => {
  console.log('****数据库连接成功****')
})
