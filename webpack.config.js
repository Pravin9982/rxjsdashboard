const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".css", ".scss", ".js", ".jsx"],
  },
  module: {
        rules: [
          {
            test: /\.s?css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  url: {
                    filter: (url) => {
                      if (url.startsWith("data:")) {
                        return false;
                      }
                      return true;
                    },
                  },
                },
              },
              "sass-loader",
            ],
          },
          {
            test: /\.jsx?$/,
            use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            }},
            exclude: /node_modules/,
          },
        ],
      },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new ModuleFederationPlugin({
      name: "rxjsdashboard",
      filename: "remoteEntry.js",
      remotes: {
        calculatormf: "calculatormf@http://localhost:3002/remoteEntry.js"
      },
    }),
  ],
};


//'''''''''''''''''''''''''''''''''''''''''''
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const deps = require("./package.json").dependencies;

// module.exports = {
//   mode: "development",
//   resolve: {
//     extensions: [".css", ".scss", ".js", ".jsx"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.s?css$/,
//         use: [
//           "style-loader",
//           {
//             loader: "css-loader",
//             options: {
//               url: {
//                 filter: (url) => {
//                   if (url.startsWith("data:")) {
//                     return false;
//                   }
//                   return true;
//                 },
//               },
//             },
//           },
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.jsx?$/,
//         use: {
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-react", "@babel/preset-env"],
//         }},
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "public", "index.html"),
//     }),
//     new ModuleFederationPlugin({
//       name: "rxjsdashboard",
//       filename: "remoteEntry.js",
//       remotes: {
//         calculatormf: "calculatormf@http://localhost:3002/remoteEntry.js"
//       },
//     }),
//   ],
// };

//'''''''''''''''''''''''''''''''''''''''''''''''''''''''
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// const deps = require("./package.json").dependencies;
// module.exports = {
//   mode : 'development',
//   output: {
//     publicPath: "http://localhost:3000/",
//   },

//   resolve: {
//     extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
//   },

//   devServer: {
//     port: 3000,
//     historyApiFallback: true,
//   },

//   module: {
//     rules: [
//       {
//         test: /\.m?js/,
//         type: "javascript/auto",
//         resolve: {
//           fullySpecified: false,
//         },
//       },
//       {
//         test: /\.(css|s[ac]ss)$/i,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//       {
//         test: /\.(ts|tsx|js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react", "@babel/preset-env"],
//           }

//         },
//       },
//     ],
//   },

//   plugins: [
//     new ModuleFederationPlugin({
//       name: "rxjsdashboard",
//       filename: "remoteEntry.js",
//       remotes: {
//         homemf: "homemf@http://localhost:3003/remoteEntry.js",
//         calculatormf: "calculatormf@http://localhost:3002/remoteEntry.js"
//       },
//       exposes: {},
//       shared: {
//         ...deps,
//         react: {
//           singleton: true,
//           requiredVersion: deps.react,
//         },
//         "react-dom": {
//           singleton: true,
//           requiredVersion: deps["react-dom"],
//         },
//       },
//     }),
//     new HtmlWebPackPlugin({
//       template: "./public/index.html",
//     }),
//   ],
// };

