'use strict'
async function nestedRoutesByIdRoutes (fastify) {
  fastify.get('/', {
    handler: (req, res) => {
      const id = req.params.id
      req.log({ id }, 'handler get / nestedRoutesByIdRoutes')
      fastify.makeANoise(fastify.log, 'nestedRoutesByIdRoutes')
      fastify.makeANoise(req.log, 'nestedRoutesByIdRoutes')
      fastify.makeANoiseError(fastify.log, 'nestedRoutesByIdRoutes')
      fastify.makeANoiseError(res.log, 'nestedRoutesByIdRoutes')
      return {
        id
      }
    },
    schema: {
      200: {
        type: 'object'
      }
    }
  })
  fastify.get('/open', {
    handler: (req, res) => {
      const id = req.params.id
      req.log({ id }, 'handler get /open nestedRoutesByIdRoutes')
      return {
        data: {
          id
        },
        open: true
      }
    },
    schema: {
      200: {
        type: 'object'
      }
    }
  })
  fastify.addHook('onRequest', fastify.authorization)
}

export default nestedRoutesByIdRoutes
