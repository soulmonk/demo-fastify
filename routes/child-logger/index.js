export default async function childLogger (fastify) {
  const childLogger = fastify.log.child({ module: 'childLogger' })
  fastify.get('/', {
    handler: (req, res) => {
      const childLoggerFromRequest = req.log.child({ module: 'childLoggerFromRequest' })
      childLogger.info('handler childLogger')
      childLoggerFromRequest.info('handler childLogger')
      return {
        childLogger: true
      }
    },
    schema: {
      200: {
        type: 'object'
      }
    }
  })
}
