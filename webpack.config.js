const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

const ruleForJavaScript = {
  test: /\.(js|jsx)$/,
  loader: "babel-loader",
  exclude: /node_modules/,
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};

const ruleForTypeScript = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: "ts-loader",
};

const ruleForStles = {
  test: /\.(css|sass|scss)$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

const ruleForImages = {
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
  type: "asset",
};

const ruleForFonts = {
  test: /\.ttf$/,
  use: ["ttf-loader"],
};

const rules = [
  ruleForJavaScript,
  ruleForTypeScript,
  ruleForStles,
  ruleForImages,
  ruleForFonts,
];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    entry: "./src/index.tsx",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
    devServer: {
      open: true,
      compress: true,
      port: 3000,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: { rules },
  };
};
