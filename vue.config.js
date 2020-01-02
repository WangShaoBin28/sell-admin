// vue.config.js
module.exports = {
    devServer: {
        port: 8000,
        proxy: {
            '/apis': {
                target: 'http://192.168.1.1:8080/',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};
