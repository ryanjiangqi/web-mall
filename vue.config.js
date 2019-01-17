module.exports = {
    outputDir: 'dist',
    baseUrl: './',
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/api': {
                target: 'http://apiadmin.test',   //代理接口
                changeOrigin: true,

            }
        }
    }
};
