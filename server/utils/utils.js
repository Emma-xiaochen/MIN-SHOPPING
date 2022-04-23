const { resolve } = require('path')
const { readFileSync, writeFileSync } = require('fs')

/**
 * 转换成树结构数据
 * @param {array} list 数据[{ id,pid }]
 * @return {array} 数据[{ id,pid,children }]
 */
function treeData (list) {
  const isParent = '0' // pId='0'为根节点
  const parents = list.filter(p => p.pId === isParent)
  const children = list.filter(p => p.pId !== isParent)

  const t = (parents, children) => {
    parents.forEach(p => {
      children.forEach((c, index) => {
        if (c.pId === p.id) {
          if (!p.children) {
            p.children = []
          }
          p.children.push(c)
          
          let tempChildList = [...children]
          tempChildList.splice(index, 1)
          t([c], tempChildList)
        }
      })
    })
  }

  t(parents, children)

  return parents
}

/**
 * 获取url上的参数
 * @param {string} url
 * @return {object} { key: value }
 */
function getUrlParams (url) {
  let res = {}
  let paramStr = url.split('?')[1] || ''
  let keyValArr = paramStr ? paramStr.split('&') : []

  keyValArr.forEach(kv => {
    if (!kv) return
    const [ k, v = '' ] = kv.split('=')
    res[k] = v
  })

  return res
}

/**
 * http 实体
 * @param {Object} param0 http body
 */
function resBody ({ data = {}, code = 200, message = 'success' }) {
  return JSON.stringify({
    code: code,
    message: message,
    data: data
  })
}

/**
 * 操作文件
 * @param {string} path 文件路径
 * @param {function} fn 回调函数
 */
function operationFile (path, fn) {
  if (!fn) {
    return readFile(path)
  }

  let data = readFile(path)

  data = fn(data)

  writeFile(path, data)
}

function readFile (path) {
  const f = resolve(__dirname, path)
  return JSON.parse(readFileSync(f, 'utf-8') || [])
}

function writeFile (path, data) {
  if (data) {
    const f = resolve(__dirname, path)
    writeFileSync(f, JSON.stringify(data))
  }
}

module.exports = {
  treeData,
  resBody,
  getUrlParams,
  operationFile
}