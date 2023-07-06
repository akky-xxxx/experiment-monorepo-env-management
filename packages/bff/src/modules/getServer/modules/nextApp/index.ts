import plugin from "fastify-plugin";
import { getNextApp } from "client/server/bootstrap";

import { Host } from "../../../../shared/const/Host";
import { Port } from "../../../../shared/const/Port";

import type { FastifyPluginCallback, RouteHandler } from "fastify";

const app = getNextApp({
  hostname: Host,
  port: Port,
});

const nextRequestHandlerMain: RouteHandler = (req, reply) =>
  app
    .getRequestHandler()(req.raw, reply.raw)
    .then(() => reply.hijack());

const callback: FastifyPluginCallback = (fastify, _, done) => {
  app
    .prepare()
    .then(() => {
      fastify.get("/_next/*", nextRequestHandlerMain);

      fastify.all("/*", nextRequestHandlerMain);

      fastify.setNotFoundHandler((req, reply) =>
        app.render404(req.raw, reply.raw).then(() => reply.hijack()),
      );
      done();
    })
    .catch((error) => {
      fastify.log.error(error);
      throw error;
    });
};

export const nextApp = plugin(callback);
