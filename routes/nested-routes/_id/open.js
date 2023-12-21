"use strict";
async function nestedRoutesOpenByIdRoutes(fastify) {
  fastify.get('/open', {
    handler: (req, res) => {
      const id = req.params.id
      req.log.info({id}, 'handler nestedRoutesOpenByIdRoutes')
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
    },
  });
}

module.exports = nestedRoutesOpenByIdRoutes;
