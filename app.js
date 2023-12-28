'use strict'
import fastify from 'fastify'
import { join, dirname } from 'node:path'
import autoload from '@fastify/autoload'
import { fileURLToPath } from 'node:url'

export default async function init (instance, opts) {
  const __dirname = dirname(fileURLToPath(import.meta.url))
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
      level: process.env.LOG_LEVEL || 'info'
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
if (import.meta.url.startsWith('file:')) { // (A)
  const modulePath = fileURLToPath(import.meta.url)
  if (process.argv[1] === modulePath) { // (B)
    run()
  }
}
