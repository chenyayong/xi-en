import {
	request
} from '@/common/js/request-xe.js';

export const getWithdrawals = (data = {}) => {
	return request('/api/user/withdrawals_list', 'get', data);
}

// api/User/bankcard_list
export const getBankcardList = (data = {}) => {
	return request('/api/user/bankcard_list', 'get', data);
}

export const getChooseBankcard = (data = {}) => {
	return request('/api/user/add_bankcard', 'get', data);
}

export const addBankcard = (data = {}) => {
	return request('/api/user/add_bankcard', 'post', data);
}

export const delBankcard = (data = {}) => {
	return request('/api/user/del_bankcard', 'get', data);
}