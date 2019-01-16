const bunyan = require('bunyan')

const logger = bunyan.createLogger({
  name: 'Rastreator-API',
  level: 'debug'
})

module.exports = logger
