const utils = require('../utils/utils')
const userModel = require('../models/userSchema')

const welcome = {
  method: 'get',
  path: '/',
  fn: (ctx) => {
    ctx.type = 'html'
    ctx.body = '<h1>你好，菜鸟！</h1>'
  }
}

const ln = 'admin'
const pw = '123456'
// 后台管理系统登录
const login = {
  method: 'post',
  path: '/login',
  fn: (ctx) => {
    const { username, password } = ctx.request.body
    if (username === ln && password === pw) {
      ctx.response.body = utils.resBody({
        data: {
          token: 'asdiu2h08d029nd'
        }
      })
    } else {
      ctx.response.body = utils.resBody({
        code: 201,
        message: '账号或密码错误!'
      })
    }
  }
}

const logout = {
  method: 'post',
  path: '/logout',
  fn: (ctx) => {
    ctx.response.body = utils.resBody({ message: '退出登录接口未开发!' })
  }
}
// 购物网站登录
const userLogin = {
  method: 'post',
  path: '/user/login',
  fn: async (ctx) => {
    const { loginName, password } = ctx.request.body
    const res = await userModel.findOne({ loginName, password })
    ctx.response.body = utils.resBody({ data: res })
  }
}

const userLogout = {

}

module.exports = [
  welcome,
  login,
  logout,
  userLogin
  // ,
  // userLogout
]