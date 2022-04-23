module.exports = async (ctx, next) => {
  ctx.set('Content-Type', 'application/json;charset=utf-8;')
  // 设置客户端访问权限（解决浏览器跨域问题）
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set("Access-Control-Allow-Headers", "X-Token, Content-Type");
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, POST, PUT, DELETE')

  await next()
}