"use strict";
async function nestedRoutes(fastify) {
    fastify.get('/', {
        handler: (req, res) => {
          return {
            id: Math.random().toString().slice(2)
          }
        },
        schema: {
          200: {
            type: 'object'
          }
        },
    });
    fastify.addHook('onRequest', fastify.authorization);
}

module.exports = nestedRoutes;
