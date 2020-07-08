// const configs = require('./configs/config.json');
// const envConfig = configs[configs.env];
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/bundle.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: 'ts-loader'
          }
        ]
      },

      // { no need any more
      //   test: /\.json$/,
      //   exclude: /(node_modules)/,
      //   loader: "json-loader"
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer('last 5 versions')];
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer('last 5 versions')];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
        // loader: "style-loader!css-loader!postcss-loader!sass-loader"
      },

    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', 'json'],
  },
  devServer: {
    clientLogLevel: 'info', // for dev only; remove from production
    host: '127.0.0.1',
    port: 5321,
    disableHostCheck: true,
    historyApiFallback: { // https://github.com/ReactTraining/react-router/issues/3409
      disableDotRule: true,
    },

  },
};
