import pxtorem from 'postcss-pxtorem';
import {defineConfig} from 'umi';

export default defineConfig({
    plugins: [
        '@umijs/plugins/dist/antd',
        '@umijs/plugins/dist/request',

        '@umijs/plugins/dist/initial-state',
        '@umijs/plugins/dist/model',

        '@umijs/plugins/dist/tailwindcss',
        '@umijs/plugins/dist/react-query',
    ],
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
    initialState: {},
    model: {},
    request: {
        dataField: 'data',
    },
    routes: [
        {
            path: '/',
            redirect: '/evaluate/evaluate-result',
        },
        {
            path: '/evaluate',
            routes: [
                {
                    path: '/evaluate',
                    redirect: '/evaluate/evaluate-result',
                },
                {path: '/evaluate/evaluate-result', component: 'evaluate/cognitionResult/index'},
                {path: '/evaluate/train-result', component: 'evaluate/familyAffectionResult/index'},
                {path: '/evaluate/train-report', component: 'evaluate/cognitiveTrainingReport/index'},
                {path: '/evaluate/train-plan', component: 'evaluate/trainingPlan/index'},
            ],
        },
        {path: '/*', component: '@/pages/404.tsx'},
    ],
    alias: {
        '@': 'src/',
    },
    npmClient: 'pnpm',
    proxy: {
        '/api': {
            target: 'http://jsonplaceholder.typicode.com/',
            changeOrigin: true,
            pathRewrite: {'^/api': ''},
        },
        '/hcsp-gateway': {
            target: 'https://dev-shcsp.tisi.com.cn/hcsp-gateway',
            changeOrigin: true,
            pathRewrite: {'^/hcsp-gateway': ''},
        },
        // 本地mock
        '/local': {
            // target: "http://localhost:8080/",
            // hangeOrigin: true,
            pathRewrite: {'^/local': ''},
        },
    },
    tailwindcss: {},

    extraPostCSSPlugins: [
        pxtorem({
            rootValue: 16, // 根据设计稿设置
            propList: ['*'],
            unitPrecision: 10,
        }),
    ],
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    jsMinifier: 'none',
});
