const Koa = require('koa')
const logger = require('./inc/logger')
const koaLogger = require('koa-logger')
const insurancesRoter = require('./routes/insurances.router')

const app = new Koa()
app.use(koaLogger())

logger.info('Init server - http://localhost:3000')
app.use(insurancesRoter.routes()).listen(3000)
