const { resolve } = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const entryPoint = resolve(__dirname, 'src/index.tsx');
const outputPath = resolve(__dirname, 'dist');
const tsconfig = resolve(__dirname, 'tsconfig.json');

module.exports = {
  mode: 'development',
  entry: entryPoint,
  output: {
    path: outputPath,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/react'] },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: tsconfig,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: outputPath,
    },
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: tsconfig })],
  },
  target: 'web',
};
