'use strict'
async function errorsRoutes (fastify) {
  fastify.get('/', {
    handler: (req, res) => {
      throw new Error('errorsRoutes this is error endpoint')
    },
    schema: {
      200: {
        type: 'object'
      }
    }
  })

  fastify.get('/case2', {
    handler: (req, res) => {
      const error = new Error('each this is error endpoint')
      error.payload = {
        internal: { properties: 'a' }
      }
      throw error
    },
    schema: {
      200: {
        type: 'object'
      }
    }
  })
  fastify.post('/case3', {
    handler: (req, res) => {
      fastify.makeANoise(fastify.log, 'case 3')
      fastify.makeANoise(req.log, 'case 3')
      fastify.makeANoiseError(fastify.log, 'case 3')
      fastify.makeANoiseError(res.log, 'case 3')
      const error = new Error('yeah this is error enpoint case3', 'case3')
      error.statusCode = 505
      error.insecure = {
        internal: { properties: 'a' }
      }
      throw error
    },
    schema: {
      200: {
        type: 'object'
      }
    }
  })
}

export default errorsRoutes
