const bunyan = require('bunyan')

const logger = bunyan.createLogger({
  name: 'Rastreator-API',
  level: process.env.NODE_ENV === 'prod' ? 'warn' : 'debug'
})

module.exports = logger
