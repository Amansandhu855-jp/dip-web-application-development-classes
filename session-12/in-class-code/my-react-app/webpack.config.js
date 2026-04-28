const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { homepage } = require("./package.json");

const homepagePath = homepage ? new URL(homepage).pathname : "/";

module.exports = (_, argv = {}) => {
  const isProd = argv.mode === "production";
  const publicUrl = process.env.PUBLIC_URL ?? (isProd ? homepagePath : "/");

  return {
    entry: "./src/index.js",
    output: {
      filename: "[name].[contenthash].js", // better caching
      path: path.resolve(__dirname, "dist"),
      clean: true, // clean dist on build
      publicPath: publicUrl, // critical for GH Pages
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 3000,

      headers: {
        "Content-Security-Policy":
          "default-src 'self'; style-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-eval'; connect-src 'self' http://localhost:3000 https://api.nasa.gov; img-src 'self' https://apod.nasa.gov https://i.imgur.com; video-src 'self' https://apod.nasa.gov;",
      },

      historyApiFallback: true,
    },
  };
};

// Then run this
// npm install --save-dev style-loader css-loader
// npm run build
// npm start
// Check build folder
