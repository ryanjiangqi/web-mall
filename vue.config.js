module.exports = {
    outputDir: 'dist',
    baseUrl: './',
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/api': {
                target: 'http://120.77.146.13:8082',   //代理接口
				//target: 'http://api-mall.test',   //代理接口
                changeOrigin: true,

            }
        }
    }
};
