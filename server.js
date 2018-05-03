var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    proxy: {
        '/api': {
            target: 'http://novel.juhe.im', // 接口的域名
            changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            pathRewrite: {
                '^/api': ''
            }
        }
    },
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    disableHostCheck: true,
    stats: {
      // Config for minimal console.log mess.
        disableHostCheck: true,
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}).listen(3001, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3001');
});