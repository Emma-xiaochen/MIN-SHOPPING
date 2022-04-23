const utils = require('../utils/utils')
const Product = require('../models/productSchema')
const req = require('./handler-request')

const { query, detail, create, edit, del } = req(Product)

const productList = { method: 'get', path: '/product/list', fn: query() }
const productDetail = { method: 'get', path: '/product/detail', fn: detail() }
const productCreate = { method: 'post', path: '/product/create', fn: create('productId') }
const productEdit = { method: 'put', path: '/product/edit', fn: edit() }
const productDelete = { method: 'delete', path: '/product/delete', fn: del() }

module.exports = [
  productList,
  productDetail,
  productCreate,
  productEdit,
  productDelete
]