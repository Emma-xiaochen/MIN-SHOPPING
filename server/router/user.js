const utils = require('../utils/utils')
const User = require('../models/userSchema')
const req = require('./handler-request')

const { query, detail, create, edit, del } = req(User)

const userList = { method: 'get', path: '/user/list', fn: query() }
const userDetail = { method: 'get', path: '/user/detail', fn: detail() }
const userCreate = { method: 'post', path: '/user/create', fn: create('userId', 'loginName') }
const userEdit = { method: 'put', path: '/user/edit', fn: edit() }
const userDelete = { method: 'delete', path: '/user/delete', fn: del() }

module.exports = [
  userList,
  userDetail,
  userCreate,
  userEdit,
  userDelete
]