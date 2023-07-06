import { bffEnvironment } from "common-env/src/bffEnvironment";

export const bffSample = () => {
  console.log({
    position: "bff sample",
    bffEnvironment,
  });
  return "return of bffSample";
};
