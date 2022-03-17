import {
	request
} from '@/common/js/request-xe.js';

export const getWithdrawRule = (data = {}) => {
	return request('/api/article/regulation', 'post', data)
}

export const getServiceAgreement = (data = {}) => {
	return request('/api/article/regulation/id/3', 'get', data)
}

export const getPrivacyPolicy = (data = {}) => {
	return request('/api/article/regulation/id/4', 'get', data)
}
// api/Article/news_list
export const getNewsList =  (data = {}) => {
	return request('/api/article/news_list', 'post', data)
}

