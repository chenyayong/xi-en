import {
	request
} from '@/common/js/request-xe.js';

export const getOrders = (data = {}) => {
	return request('/api/order/order_list', 'get', data)
}

export const getOrderPayPrice = (data = {}) => {
	return request('/api/cart/countTotalAmount', 'get', data)
}

export const createOrder = (data = {}) => {
	return request('/api/cart/add_order', 'post', data)
}

export const payOrder = (data = {}) => {
	return request('/api/Payment/order_pay', 'get', data)
}

export const cancelOrder = (data = {}) => {
	return request('/api/order/cancel_order', 'get', data)
}

export const deleteOrder = (data = {}) => {
	return request('/api/order/del_order', 'get', data)
}

export const getOrderDetail = (data = {}) => {
	return request('/api/order/order_detail', 'get', data)
}

export const refund = (data = {}) => {
	return request('/api/order/user_refund_order', 'post', data)
}

export const confirmReceipt = (data = {}) => {
	return request('/api/order/order_confirm', 'get', data)
}
