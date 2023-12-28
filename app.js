'use strict'
import fastify from 'fastify'
import { join, dirname } from 'node:path'
import autoload from '@fastify/autoload'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default async function init (instance, opts) {
  instance.register(autoload, {
    dir: join(__dirname, 'plugins'),
    options: { ...opts }
  })
  instance.register(autoload, {
    dir: join(__dirname, 'routes'),
    routeParams: true,
    options: { ...opts }
  })
}

async function run () {
  const instance = fastify({
    logger: {
      level: process.env.LOG_LEVEL || 'info',
      // messageKey: 'message', // if you want to change the message key from 'msg' to 'message'
      // sanitize
    }
    // disableRequestLogging: false,
  })
  try {
    await init(instance, {})
    await instance.ready()
    await instance.listen({
      port: 3000,
      host: '0.0.0.0'
    })
    const addressInfo = instance?.server?.address()
    instance.log.info({
      message: 'Server started',
      address: addressInfo?.address,
      port: addressInfo?.port
    })
  } catch (error) {
    instance.log.error({ message: 'could not init server', error })
    instance.log.error(error, 'could not init server')
  }
}
if (import.meta.url.startsWith('file:')) {
  if (process.argv[1] === __filename) {
    run()
  }
}
