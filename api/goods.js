import {
	request
} from '@/common/js/request-xe.js';

export const getCategory = (data = {}) => {
	return request('/api/goods/categoryList', 'get', data);
}

export const getGoodsList = (data = {}) => {
	return request('/api/goods/goodsList', 'get', data);
}

export const getGoodsInfo = (data = {}) => {
	return request('/api/goods/goodsInfo', 'get', data);
}

export const collectGoods = (data = {}) => {
	return request('/api/goods/collect_goods', 'get', data);
}
