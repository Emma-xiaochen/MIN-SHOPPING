const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const log = require('log4js').getLogger('server')
const bodyParser = require('koa-bodyparser')
const respDurationMiddleware = require('./middleware/duration')
const respHeaderMiddleware = require('./middleware/header')
const requestInfoMiddleware = require('./middleware/info')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

log.level = 'info'

require('./config/db')            // 启动数据库

app
  .use(bodyParser())              // http 实体中的数据解析到 koa 上下文中
  .use(respDurationMiddleware)    // 计算服务器相应耗时
  .use(respHeaderMiddleware)      // 设置响应头部header
  .use(requestInfoMiddleware)     // 打印请求信息
  .use(router.routes())           // 注册路由
  .use(router.allowedMethods())


// 启动服务
app.listen('8888', () => {
  log.info('Welcome to Koa')
  log.info('Listening on port 8888')
})