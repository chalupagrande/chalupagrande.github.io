const redis = require('redis')

/**
 * setup redis
 */

const redisConfig = {}

console.log("REDIS URL", process.env.REDIS_URL)
// set up for production
if (process.env.NODE_ENV === 'production') {
  redisConfig.url = process.env.REDIS_URL
}

const client = redis.createClient(redisConfig)
client.on('error', (error) => {
  console.error('REDIS ERROR', error)
})

client.on('ready', () => {
  console.log('REDIS IS READY')
})
client.on('reconnecting', () => {
  console.log("REDIS URL", process.env.REDIS_URL)
  console.log('Reconnecting to REDIS')
})

client.on('end', () => {
  console.log('Connection ENDED with REDIS')
})

client.connect()

module.exports = client
