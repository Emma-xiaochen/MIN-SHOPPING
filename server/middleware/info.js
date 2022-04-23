const log = require('log4js').getLogger('server');
log.level = 'info';

module.exports = async (ctx, next) => {
  const { request } = ctx
  log.info(`${ request.method } | ${ request.url } | ${ JSON.stringify(request.body) }`)

  await next()
}