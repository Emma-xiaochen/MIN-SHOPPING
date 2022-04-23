const Menu = require('../models/menuSchema')
const req = require('./handler-request')

const { query, create, detail, edit, del } = req(Menu)

const menuList = { method: 'get', path: '/menu/list', fn: query((res, utils) => {
  const cloneData = JSON.parse(JSON.stringify(res))
  return utils.treeData(cloneData) // 转成树结构
})}
const menuDetail = { method: 'get', path: '/menu/detail', fn: detail() }
const menuEdit = { method: 'put', path: '/menu/edit', fn: edit() }
const menuCreate = { method: 'post', path: '/menu/create', fn: create('menuId') }
const menuDelete = { method: 'delete', path: '/menu/delete', fn: del() }

module.exports = [
  menuList,
  menuDetail,
  menuEdit,
  menuCreate,
  menuDelete
]