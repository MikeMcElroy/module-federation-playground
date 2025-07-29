import { Configuration } from "webpack";
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: Configuration = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { "runtime": "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [["@babel/preset-react", { "runtime": "automatic" }], "@babel/preset-env"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        world: "world@http://localhost:3001/remoteEntry.js",
        solarSystem: "solarSystem@http://localhost:3002/remoteEntry.js",
        universe: "universe@http://localhost:3003/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

export default config;
