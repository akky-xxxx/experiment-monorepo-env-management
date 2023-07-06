import fastify from "fastify";
import { nextApp } from "./modules/nextApp";

export const getServer = async () => {
  const server = fastify();

  await server.register(nextApp);

  return server;
};
