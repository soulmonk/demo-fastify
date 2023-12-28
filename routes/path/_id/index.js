'use strict'
export default async function (fastify) {
  fastify.get('/', {
    handler: (req, res) => {
      const id = req.params.id
      return {
        id,
        path: 'path'
      }
    },
    schema: {
      200: {
        type: 'object'
      }
    }
  })
}
