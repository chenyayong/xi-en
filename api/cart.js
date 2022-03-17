import {
	request
} from '@/common/js/request-xe.js';
import store from '@/store/index.js'
const key = 'CART_ORDERS'
/*
* cartOrders
* return {
	msg: 'ok',
	status: 1,
	result: []
}
*
*/
export const getCartOrders = () => {
	return new Promise((resolve, reject) => {
		uni.getStorage({
			key,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export const setCartOrders = (data = {}) => {
	return new Promise((resolve, reject) => {
		uni.setStorage({
			key,
			data,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export const addCartOrders = (data = {}) => {
	return new Promise(async (resolve, reject) => {
		let res = {
			msg: '添加成功',
			status: 1,
			result: []
		}
		try {
			const data = await getCartOrders()
			res.result = data.result
		} catch (err) {
			// do something
		}

		const item = res.result.find(item => {
			let result = false
			if (item.sku && item.sku.id && data.sku && data.sku.id && data.sku.id === item.sku
				.id && item.id === data.id) {
				result = true
			} else if (item.sku && !item.sku.id && data.sku && !data.sku.id && item.id === data
				.id) {
				result = true
			}
			return result
		})
		if (item) {
			item.number = item.number + data.number
		} else {
			res.result.unshift(data)
		}

		// const item = res.result.find(item => item.id === data.id)
		// if (item) {
		// 	if (data.sku && data.sku.id) {
		// 		console.log(item, data, item.sku.id === data.sku.id)
		// 		if (item.sku && item.sku.id === data.sku.id) {
		// 			item.number = item.number + data.number
		// 		} else {
		// 			res.result.unshift(data)
		// 		}
		// 	} else {
		// 		item.number = item.number + data.number
		// 	}
		// } else {
		// 	res.result.unshift(data)
		// }
		if (res.result.length) {
			setCartOrders(res)
			resolve(res)
		} else {
			res.msg = '添加失败'
			res.status = 1
			reject(res)
		}
	})
}

export const updateCartOrders = (data = {}, key) => {
	return new Promise(async (resolve, reject) => {
		const res = {
			msg: '更新成功',
			status: 1,
			result: []
		}
		const id = data.id
		const value = data[key]
		try {
			const data = await getCartOrders()
			res.result = data.result
		} catch (err) {
			// do something
		}
		const item = res.result.find(e => e.id === id)

		if (item) {
			item[key] = value
			setCartOrders(res)
			resolve(res)
		} else {
			res.msg = '更新失败'
			res.status = 0
			reject(res)
		}
	})
}

export const updateAllCartOrders = (data = {}, key) => {
	return new Promise(async (resolve, reject) => {
		const res = {
			msg: '更新成功',
			status: 1,
			result: []
		}
		const value = data[key]
		try {
			const data = await getCartOrders()
			res.result = data.result
		} catch (err) {
			// do something
		}
		res.result.forEach((item) => {
			item[key] = value
		})

		if (res.result.length) {
			setCartOrders(res)
			resolve(res)
		} else {
			res.msg = '更新失败'
			res.status = 0
			reject(res)
		}
	})
}

export const deleteCartOrders = (id) => {
	return new Promise(async (resolve, reject) => {
		const res = {
			msg: '删除成功',
			status: 1,
			result: []
		}
		try {
			const data = await getCartOrders()
			res.result = data.result
		} catch (err) {
			// do something
		}
		const index = res.result.findIndex(item => item.id === id)
		if (index > -1) {
			res.result.splice(index, 1)
			setCartOrders(res)
			resolve(res)
		} else {
			res.msg = '删除失败'
			res.status = 0
			reject(res)
		}
	})
}

export const deleteAllCartOrders = () => {
	return new Promise(async (resolve, reject) => {
		const res = {
			msg: '清空成功',
			status: 1,
			result: []
		}
		setCartOrders(res).then(() => {
			resolve(res)
		}).catch((err) => {
			res.status = 0
			res.msg = '清空失败'
			reject(res)
		})
	})
}
