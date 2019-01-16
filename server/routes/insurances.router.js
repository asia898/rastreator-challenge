const KoaBody = require('koa-body')
const KoaRouter = require('koa-router')

const fs = require('fs')
const logger = require('../inc/logger')

const router = new KoaRouter({
  prefix: '/insurances'
})

class InsurancesRouter {
  static async getAll(ctx) {
    logger.info('Get all insurances')

    ctx.status = 200
    ctx.type = 'application/json'
    ctx.body = await JSON.parse(fs.readFileSync('./server/data/insurances.json', 'utf8'))
  }

}

router.get('/', InsurancesRouter.getAll)

module.exports = router
