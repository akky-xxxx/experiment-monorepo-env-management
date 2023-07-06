import { clientEnvironment } from "common-env/src/clientEnvironment";

export const clientSample = () => {
  console.log({
    position: "clientSample",
    clientEnvironment,
  });
  return "return of clientSample";
};
