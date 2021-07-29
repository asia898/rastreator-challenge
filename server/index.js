const Koa = require('koa')
const serve = require('koa-static')
const logger = require('./inc/logger')
const koaLogger = require('koa-logger')

const loansRoter = require('./routes/loans.router')
const insurancesRoter = require('./routes/insurances.router')

const app = new Koa()

app.use(serve(__dirname + '/public'))

app.use(koaLogger())

app.use(loansRoter.routes())
app.use(insurancesRoter.routes())

app.use(function* index() {
    yield send(this, __dirname + '/index.html');
  });

logger.info('Init server - http://localhost:3000')
app.listen(3000)
