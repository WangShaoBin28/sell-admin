// vue.config.js
module.exports = {
    devServer: {
        port: 8000,
        proxy: {
            '/apis': {
                target: 'http://127.0.0.1:5004/',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};
