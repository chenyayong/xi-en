import {
	request
} from '@/common/js/request-xe.js';

export const addAddress = (data = {}) => {
	return request('/api/user/add_address', 'post', data)
}

export const getAddress = (data = {}) => {
	return request('/api/user/address_list', 'get', data)
}

export const deleAddress = (data = {}) => {
	return request('/api/user/del_address', 'get', data)
}

export const editAddress = (data = {}) => {
	return request('/api/user/edit_address', 'post', data)
}
