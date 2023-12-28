"use strict";
import fp from 'fastify-plugin';

export default fp(async (fastify) => {
    async function authorization(request, reply) {
        const sendUnauthorized = () => {
            void reply.code(401).send({ message: 'Unauthorized' });
            return false;
        };
        try {
            if (Math.random() < 0.1) {
              throw new Error('random wins')
            }
            request.user = { merchantCode: Math.random() };
        }
        catch (error) {
            fastify.log.error({ message: 'could not extract data', error });
            fastify.log.error(error, 'could not extract data');
            return sendUnauthorized();
        }
        return true;
    }
    fastify.decorate('authorization', authorization);
});
