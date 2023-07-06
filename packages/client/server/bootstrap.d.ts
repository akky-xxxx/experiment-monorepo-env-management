import type next from "next";

type NextServer = ReturnType<typeof next>;

type Init = {
  hostname: string;
  port: number;
};

declare function getNextApp(init: Init): NextServer;
