"use strict";
import S from 'fluent-json-schema';

const logMe = (logger, prefix) => {
  const msg = `${prefix} - I'm a message`;
  const obj = {
    headers: {
      authorization: "Bearer secret-token",
    },
    properties: 'lll',
    properties2: 'ppp',
    msg,
  }
  logger.info(obj)
  logger.info(obj, msg)
  logger.info(msg, obj)
  logger.info(msg, obj)
}
async function pingRoutes(fastify) {
    fastify.get('/ping', {
        // logLevel: 'silent',
        handler: (req, res) => {
          logMe(fastify.log, 'fastify')
          logMe(req.log, 'req')
          // logMe(res.log, 'res')
          return { status: 'ok' }
        },
        schema: {
            tags: ['system'],
            response: {
                200: S.object().prop('status', S.string()),
            },
        },
    });
}

export default pingRoutes;
