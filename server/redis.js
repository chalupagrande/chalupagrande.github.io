const redis = require('redis')
const { promisify } = require('util')

/**
 * setup redis
 */

const redisConfig = {}

// set up for production
if (process.env.NODE_ENV === 'production') {
  redisConfig.url = process.env.REDIS_URL
}

const client = redis.createClient(redisConfig)
client.on('error', function (error) {
  console.error('REDIS ERROR', error)
})

client.on('ready', () => {
  console.log('REDIS IS READY')
})
client.on('reconnecting', () => {
  console.log('Reconnecting to REDIS')
})

client.on('end', () => {
  console.log('Connection ENDED with REDIS')
})

const getAsync = promisify(client.get).bind(client)
const setAsync = promisify(client.set).bind(client)
const delAsync = promisify(client.del).bind(client)

module.exports = {
  getAsync,
  setAsync,
  delAsync,
}
