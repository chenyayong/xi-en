import {
	request
} from '@/common/js/request-xe.js';

export const userLogin = (data = {}) => {
	return request('/api/login/code_login', 'post', data);
};

export const logout = (data = {}) => {
	return request('/api/login/log_out', 'get', data);
}


export const sendSmsCode = (data = {}) => {
	return request('/api/api/send_validate_code', 'post', data);
};
export const weixinLogin = (data = {}) => {
	return request('/api/login/wechat_login', 'post', data);
};
export const bindMobile = (data = {}) => {
	return request('/api/login/bind_mobile', 'post', data);
};
export const getUserInfo = (data = {}, method = 'get') => {
	return request('/api/user/index', method, data);
}

// 
export const updateUserInfo = (data = {}) => {
	return request('/api/user/userInfo', 'post', data);
}

// api/user/getAppletCode   小程序二维码   
// api/user/getWeChatCode  微信二维码
export const getAppletCode = (data = {}) => {
	return request('/api/user/getAppletCode', 'get', data);
}

export const getWeChatCode = (data = {}) => {
	return request('/api/user/getWeChatCode', 'get', data);
}

export const getGroupList = (data = {}) => {
	return request('/api/user/group_list', 'get', data);
}


export const getAccountList = (data = {}) => {
	return request('/api/user/account_list', 'get', data);
}

export const getWithrawalsList = (data = {}) => {
	return request('/api/user/withdrawals_list', 'get', data);
}

export const withdrawals = (data = {}, method = 'get') => {
	return request('/api/user/withdrawals', method, data);
}

export const uploadHeadPic = (data = {}) => {
	return request('/api/user/head_pic', 'post', data); 
}

export const getPointsList = (data = {}) => {
	return request('/api/user/points_list', 'get', data); 
}

