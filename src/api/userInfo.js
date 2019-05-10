import request from './axios';
export function loginCompany(params) {
    return request({
        url: '/app/2.1.0/login/company/sign',
        method: 'post',
        params
    })
}