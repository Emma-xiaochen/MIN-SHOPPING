const utils = require('../utils/utils')
const Article = require('../models/articleSchema')
const req = require('./handler-request')

const { query, detail, create, edit, del } = req(Article)

const articleList = { method: 'get', path: '/article/list', fn: query() }
const articleDetail = { method: 'get', path: '/article/detail', fn: detail() }
const articleCreate = { method: 'post', path: '/article/create', fn: create('articleId') }
const articleEdit = { method: 'put', path: '/article/edit', fn: edit() }
const articleDelete = { method: 'delete', path: '/article/delete', fn: del() }

module.exports = [
  articleList,
  articleDetail,
  articleCreate,
  articleEdit,
  articleDelete
]