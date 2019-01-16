const KoaBody = require('koa-body')
const KoaRouter = require('koa-router')

const fs = require('fs')
const logger = require('../inc/logger')

const router = new KoaRouter({
  prefix: '/loans'
})

class LoansRouter {
  static async getAll(ctx) {
    logger.info('Get all loans')

    ctx.status = 200
    ctx.type = 'application/json'
    ctx.body = await JSON.parse(fs.readFileSync('./server/data/loans.json', 'utf8'))
  }
}

router.get('/', LoansRouter.getAll)
module.exports = router
