export default async function (fastify) {
  fastify.get('/', {
    handler: (req, res) => {
      req.log.info('handler messageVsMsg 1')
      req.log.info({ message: 'handler messageVsMsg 2' }) // will replace msg
      req.log.info({ msg: 'handler messageVsMsg 3' }) // same as first log
      return {
        message: 'message',
      }
    },
    schema: {
      200: {
        type: 'object',
      },
    },
  })
}
