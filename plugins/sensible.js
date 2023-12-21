"use strict";
const fp = require('fastify-plugin');
const sensible = require('@fastify/sensible');
/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
// eslint-disable-next-line @typescript-eslint/require-await
module.exports = fp(async (fastify) => {
    void fastify.register(sensible, {});
});
