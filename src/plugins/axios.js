"use strict";

import Vue from 'vue';
import axios from "axios";
import {getAccessToken, getToken} from '@/utils/access_token';
import store from '@/store'
import Qs from 'qs'
import { Message } from 'element-ui'
const BASE_URL = process.env.VUE_APP_API_URL; // 第二节配置的url 可以读取 一定要VUE_APP_A为前缀
// const NODE_ENV = process.env.NODE_ENV
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let config = {
    baseURL: BASE_URL,
    timeout: 60 * 1000, // Timeout
    withCredentials: false, // Check cross-site Access-Control axios支持跨域cookie 在生产环境要禁用
};

const _axios = axios.create(config);

// request拦截器
_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        config.headers['Access-Token'] = getAccessToken();
        const token = getToken()
        if (token) {
            config.headers['Authorization'] = token
        }

        if (store.getters.token) {
            config.headers['Access-Token'] = getAccessToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        }
        if (store.getters.auth_token && token) {
            config.headers['Authorization'] = token
        }
        return config;
    },
    function (error) {
        // Do something with request error
        console.log(error) // for debug
        return Promise.reject(error);
    }
);

// respone拦截器 添加响应拦截器
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        if (response.code === 2000) {
            return response;
        }
        return response;
    },
    function (error) {
        // Do something with response error
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin);

export default Plugin;

export function api_request(config, options) {
    const pars = {...config}
    if (config.requestBody) {
        pars.data = options
        pars.method = 'post'
        return _axios(pars)
    }
    switch (config.method) {
        case 'get':
            pars.params = options
            return _axios(pars)
        case 'post':
            pars.data = options
            return _axios.post(config.url, Qs.stringify(options))
    }
}


