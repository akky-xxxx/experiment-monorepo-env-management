import { NextPage } from "next";
import { clientEnvironment } from "common-env/src/clientEnvironment";
import { clientSample } from "common/src/clientSample";

console.log({
  position: "outside component",
  NEXT_PUBLIC_VAR: clientEnvironment.NEXT_PUBLIC_VAR,
  sample: clientSample(),
});

const Top: NextPage = () => {
  console.log({
    position: "inside component",
    NEXT_PUBLIC_VAR: clientEnvironment.NEXT_PUBLIC_VAR,
    sample: clientSample(),
  });

  return <div>Top</div>;
};

export default Top;
