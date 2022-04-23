module.exports = async (ctx, next) => {
  const start = Date.now()
  await next()
  const end = Date.now()
  const duration = end - start

  // 设置响应头 X-Response-Time
  ctx.set('X-Response-Time', duration + 'ms')
}