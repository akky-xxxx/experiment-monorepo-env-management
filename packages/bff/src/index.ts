import { getServer } from "./modules/getServer";
import { Port } from "./shared/const/Port";
import { Host } from "./shared/const/Host";
import { bffSample } from "common/src/bffSample";

console.log({
  position: "bff entry",
  sample: bffSample(),
});

const main = async () => {
  const server = await getServer();

  server.listen({ host: Host, port: Port }, (error) => {
    if (error) throw error;

    server.log.trace(`> Ready on http://${Host}:${Port}`);
  });
};

main();
