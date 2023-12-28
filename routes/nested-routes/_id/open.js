"use strict";
async function nestedRoutesOpenByIdRoutes(fastify) {
  fastify.get('/open', {
    handler: (req, res) => {
      const id = req.params.id
      console.log("line 6", req.log)
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

export default nestedRoutesOpenByIdRoutes;
