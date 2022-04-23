const utils = require('../utils/utils')
const Counter = require('../models/counterSchema')

function init (utils, Counter) {
  return function (model) {
    return {
      query: query(utils, model),
      detail: detail(utils, model),
      create: create(utils, model, Counter),
      edit: edit(utils, model),
      del: del(utils, model),
    }
  }
}

// 查询
const query = (utils, model) => {
  return (fn) => {
    return async (ctx) => {
      try {
        const { currentPage, pageSize = 10, total, ...params } = ctx.request.query
        let resData = {}, option = null
        
        // 查询条件（模糊）
        let t = []
        for (let [key, value] of Object.entries(params)) {
          if (value) {
            t.push({ [key]: { $regex: value, $options: '$i' } })
          }
        }

        // 分页参数
        if (currentPage) {
          option = {
            skip: (currentPage - 1) * pageSize,
            limit: +pageSize
          }
          const total = await model.countDocuments(t.length > 0 ? { $or: t } : {})
          resData = { currentPage: +currentPage, pageSize: +pageSize, total }
        }

        const res = await model.find(
          t.length > 0 ? { $or: t } : {}, // 查询参数
          { _id: 0, __v: 0, content: 0, md_content: 0 }, // 0 代表不查
          option
        )

        // 数据特殊处理
        resData.data = fn ? fn(res, utils) : res

        // 响应请求
        ctx.response.body = utils.resBody({ data: resData })

      } catch (error) {
        ctx.response.body = utils.resBody({
          code: '50000',
          message: error.message
        })
      }
    }
  }
}

// 详情
const detail = (utils, model) => {
  return () => {
    return async (ctx) => {
      try {
        const { id } = ctx.request.query
        const res = await model.findOne({ id })

        ctx.response.body = utils.resBody({ data: res })
      } catch (error) {
        ctx.response.body = utils.resBody({
          code: '50000',
          message: error.message
        })
      }
    }
  }
}

// 新增
const create = (utils, model, Counter) => {
  return (modelId, key) => {
    return async (ctx) => {
      const menuData = ctx.request.body

      try {
        // key 就是设置一个字段为唯一的，比如user要设置loginname唯一，product要设置productName唯一
        const res = await model.findOne({ [key]: menuData[key] }, 'id')
        if (res) {
          // 1.是否 key 已存在
          ctx.response.body = utils.resBody({
            code: '20001',
            message: `系统检测到该数据已存在!`
          })
        } else {
          // 2.生成id
          const doc = await Counter.findOneAndUpdate(
            { _id: modelId },
            { $inc: { sequence_value: 1 } },
            { new: true }
          )
          // 3.插入数据库
          const menu = new model({
            id: doc.sequence_value,
            ...menuData
          })
          menu.save()
          ctx.response.body = utils.resBody({ message: '新增成功!' })
        }
      } catch (error) {
        ctx.response.body = utils.resBody({
          code: '50000',
          message: error.message
        })
      }

    }
  }
}

// 编辑
const edit = (utils, model) => {
  return () => {
    return async (ctx) => {
      const data = ctx.request.body

      try {
        const res = await model.updateOne({ id: data.id }, { $set: data })
        ctx.response.body = utils.resBody({ message: '编辑成功!' })
      } catch (error) {
        ctx.response.body = utils.resBody({
          code: '50000',
          message: error.message
        })
      }
    }
  }
}

// 删除
const del = (utils, model) => {
  return () => {
    return async (ctx) => {
      const { id } = ctx.request.query

      try {
        const res = await model.deleteOne({ id })
        ctx.response.body = utils.resBody({ message: '删除成功!' })
      } catch (error) {
        ctx.response.body = utils.resBody({
          code: '50000',
          message: error.message
        })
      }
    }
  }
}

module.exports = init(utils, Counter)