const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  lessVarsFilePath: 'src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  images: {
    domains: ["127.0.0.1", "agile-stream-81419.herokuapp.com"],
  },

  webpack(config) {
    return config;
  },

 
});