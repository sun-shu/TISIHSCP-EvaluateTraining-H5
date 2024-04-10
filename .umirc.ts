import pxtorem from 'postcss-pxtorem';
import { defineConfig } from 'umi';

const baseApiPrefix = '/hcsp-gateway/baseApi/v1/';
export default defineConfig({
	plugins: [
		'@umijs/plugins/dist/antd',
		'@umijs/plugins/dist/request',

		'@umijs/plugins/dist/initial-state',
		'@umijs/plugins/dist/model',

		'@umijs/plugins/dist/tailwindcss',
		'@umijs/plugins/dist/react-query',
		'@umijs/max-plugin-openapi',
	],
	publicPath: process.env.NODE_ENV === 'production' ? '/h5/' : '/',
	base: process.env.NODE_ENV === 'production' ? '/h5/' : '/',
	initialState: {},
	model: {},
	request: {
		dataField: 'data',
	},
	routes: [
		{
			path: '/evaluate',
			routes: [
				{ path: '/evaluate/result/:customerId', component: 'evaluate/result/index' },
			],
		},
		{
			path: '/train',
			routes: [
				{ path: '/train/result/:customerId', component: 'train/result/index' },
				{ path: '/train/report/:customerId', component: 'train/report/index' },
				{ path: '/train/plan/:customerId', component: 'train/plan/index' },
			],
		},
		{ path: '/*', component: '@/pages/404.tsx' },
	],
	alias: {
		'@': 'src/',
	},
	// TODO by sunshu 需要等待apiFox24-04-30号之前上线按照目录生成接口功能 再做地址替换
	openAPI: [
		{
			requestLibPath: 'import { request } from \'@@/exports\'',
			schemaPath: 'http://127.0.0.1:4523/export/openapi?projectId=4258309&specialPurpose=openapi-generator',
			projectName: 'baseApi',
			namespace: 'baseApiInterface',
			mock: false,
			apiPrefix: '\'/hcsp-gateway/baseApi/v1\'',
			hook: {
				// customFunctionName: (config) => {
				// 	return `baseApi_${config.operationId}`;
				// },
			},
		},
		{
			requestLibPath: 'import { request } from \'@@/exports\'',
			schemaPath: 'http://127.0.0.1:4523/export/openapi?projectId=4258309&specialPurpose=openapi-generator',
			projectName: 'clientApi',
			namespace: 'clientApiInterface',
			mock: false,
			apiPrefix: '\'/hcsp-gateway/clientApi/v1\'',
			hook: {
				// customFunctionName: (config) => {
				// 	return `clientApi_${config.operationId}`;
				// },
			},
		},
	],
	mock: false,
	npmClient: 'pnpm',
	proxy: {
		'/api': {
			target: 'http://jsonplaceholder.typicode.com/',
			changeOrigin: true,
			pathRewrite: { '^/api': '' },
		},
		'/hcsp-gateway': {
			target: 'http://143.64.23.172/hcsp-gateway',
			changeOrigin: true,
			pathRewrite: { '^/hcsp-gateway': '' },
		},
		// ApiFox 本地MOCK服务
		'/hcsp-gateway/baseApi/v1': {
			target: 'http://127.0.0.1:4523/m1/4258309-0-e0f42e91',
			changeOrigin: true,
			pathRewrite: { '^/hcsp-gateway/baseApi/v1': '' },
		},
		// 本地mock
		'/local': {
			// target: "http://localhost:8080/",
			// hangeOrigin: true,
			pathRewrite: { '^/local': '' },
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
