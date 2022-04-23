const utils = require('../utils/utils')
const Order = require('../models/orderSchema')
const req = require('./handler-request')

const { query, detail, create, edit, del } = req(Order)

const orderList = { method: 'get', path: '/order/list', fn: query() }
const orderDetail = { method: 'get', path: '/order/detail', fn: detail() }
const orderCreate = { method: 'post', path: '/order/create', fn: create('orderId') }
const orderEdit = { method: 'put', path: '/order/edit', fn: edit() }
const orderDelete = { method: 'delete', path: '/order/delete', fn: del() }

module.exports = [
  orderList,
  orderDetail,
  orderCreate,
  orderEdit,
  orderDelete
]