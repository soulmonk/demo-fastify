"use strict";
import fp from 'fastify-plugin';
import sensible from '@fastify/sensible';
/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
// eslint-disable-next-line @typescript-eslint/require-await
export default fp(async (fastify) => {
    void fastify.register(sensible, {});
});
