'use strict'
import fp from 'fastify-plugin'
export default fp(async (fastify) => {
  fastify.decorate('makeANoise', (logger, prefix) => {
    fastify.log.info("I'm decorator")
    const msg = `${prefix} - I'm a message`
    const obj = {
      headers: {
        authorization: 'Bearer secret-token'
      },
      properties: 'lll',
      properties2: 'ppp',
      msg
    }
    logger.info(obj)
    logger.info(obj, msg)
    logger.info(msg, obj)
    logger.info(msg, obj)
  })
  fastify.decorate('makeANoiseError', (logger, prefix) => {
    fastify.log.error("I'm decorator")
    const msg = `${prefix} - I'm a message level error`
    const obj = {
      headers: {
        authorization: 'Bearer secret-token'
      },
      properties: 'lll',
      properties2: 'ppp',
      msg
    }
    logger.error(obj)
    logger.error(obj, msg)
    logger.error(msg, obj)
    logger.error(msg, obj)
  })
})
