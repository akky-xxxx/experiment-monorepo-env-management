import path from "path";

import type { Configuration } from "webpack";

/**
 * @remarks パッケージルートからの相対パスから絶対パスを生成する
 */
const relativePathFromPackage = (filePath: string) =>
  path.resolve(__dirname, filePath);

const config: Configuration = {
  // source-map-support を機能させるため
  devtool: "inline-source-map",
  entry: relativePathFromPackage("src/index"),
  /** @remarks Next.js は依存には含めない */
  externals: ["next"],
  mode: "production",
  module: {
    rules: [
      {
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.build.json",
          transpileOnly: true,
        },
        test: /\.ts$/,
      },
    ],
  },
  output: {
    filename: "index.js",
    library: {
      // `module.exports` でのエクスポートを可能にするため (https://webpack.js.org/configuration/output/#type-commonjs2)
      type: "commonjs2",
    },
    path: relativePathFromPackage("dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};

// eslint-disable-next-line import/no-default-export -- Webpack の設定ファイルは default export が必要なため
export default config;
