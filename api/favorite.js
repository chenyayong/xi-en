import {
	request
} from '@/common/js/request-xe.js';

export const changeFavorite = (data = {}) => {
	return request('/api/goods/collect_goods', 'get', data);
}

export const getFavorites = (data = {}) => {
	return request('/api/user/collect_list', 'get', data);
}