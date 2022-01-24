import axios, { AxiosResponse } from 'axios';
import { message } from 'antd';
import Qs from 'qs';
import { API_ROOT } from '@/constants/index';
import { getToken, logout } from './token';

const instance = axios.create({
	baseURL: API_ROOT,
	timeout: 30000,
});


// post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// **路由请求拦截**
// http request 拦截器
instance.interceptors.request.use(
	(config) => {
		if (
			config.headers?.['Content-Type']?.indexOf(
				'application/x-www-form-urlencoded',
			) > -1
		) {
			config.method === 'post' && (config.data = Qs.stringify(config.data));
		}

		// 如果是mock数据请求，直接跳过授权流程
		if (config.baseURL === process.env.APP_MOCK) {
			return config;
		}
		// 判断是否存在token，即判断用户是否登录，如果存在的话，则每个http header都加上token
		if (getToken()) {
			const token = getToken() || '';
			// 每个http header 都加上 token
			config.headers.token = token;
		}
		return config;
	},
	(error) => Promise.reject(error.response),
);

// http 响应 拦截器
instance.interceptors.response.use(
	(response: AxiosResponse) => {
		// Do something with response data
		if (response.data?.errorCode === "700") {
			logout();
			// return false;
			// message.error(response.data?.errorMessage || '授权失败，请重新登录！');
		}
		// 全局报错提示
		if ((response.data && !response.data?.success) || response.data?.errorCode) {
			message.error(response.data?.subMessage || response.data?.errorMessage || '请求失败');
		}
		return response.data;
	},
	(error) => {
		if (error.response) {
			return Promise.reject(error.response.data);
		}
		if (error.message) {
			message.error(error.message);
			return Promise.reject(error);
		}
		return Promise.reject(JSON.stringify(error));
	},
);

export default instance;
