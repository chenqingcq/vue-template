import axios from 'axios'

// 创建axios实例
const instance = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 10000, // 请求超时时间,
    headers: {
        'Access-Control-Allow-Origin': process.env.BASE_API,
        'Content-Type': process.env.Content_Type,
        'ccess-Control-Allow-Credentials': true
    }
})

// request拦截器
instance.interceptors.request.use(config => {
    let token = window.localStorage.getItem('token');
    if (token) {
        config.headers['token'] = token;
    } else {
        //jump to login
    }
    return config
}, error => {
    Promise.reject(error.toString())
})

// respone拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        Promise.reject(error.toString());
    }
)
export default instance;

