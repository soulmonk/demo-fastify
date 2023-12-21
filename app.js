"use strict";
const fastify = require("fastify");
const path = require("path");
const autoload = require("@fastify/autoload");

async function init(instance, opts) {
  void instance.register(autoload, {
    dir: path.join(__dirname, "plugins"),
    options: { ...opts }
  });
  void instance.register(autoload, {
    dir: path.join(__dirname, "routes"),
    routeParams: true,
    options: { ...opts }
  });
}

async function run() {
  const instance = fastify({
    logger: {
      level: process.env["LOG_LEVEL"] || "info",
      // sanitize
    },
    // disableRequestLogging: false,
  });
  try {
    await init(instance, {});
    await instance.ready();
    await instance.listen({
      port: 3000,
      host: "0.0.0.0"
    });
    const addressInfo = instance?.server?.address();
    instance.log.info({
      message: "Server started",
      address: addressInfo?.address,
      port: addressInfo?.port
    });
  } catch (error) {
    instance.log.error({ message: "could not init server", error });
    instance.log.error(error, "could not init server");
  }
}

if (require.main === module) {
void run()
}

module.exports = init;
