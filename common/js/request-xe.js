import store from '@/store'
import config from '@/config.js'
import {
	msg
} from './util'

import {
	getToken
} from '@/common/js/cookie.js'

export const request = (url, method, data) => {
	return new Promise((resolve, reject) => {
		// #ifndef H5
		url = `${config.domain}${url}`
		// #endif
		uni.request({
			url,
			method: method || 'get',
			data,
			// #ifdef MP-WEIXIN
			header: {
				cookie: wx.getStorageSync("sessionid")
			},
			// #endif

			success(res) {
				// #ifdef MP-WEIXIN
				const cookie = res.header["Set-Cookie"];
				if (cookie) {
					wx.setStorageSync("sessionid", cookie); // 服务器返回的Set-Cookie，保存到本地
				}
				// #endif
				if (res.data) {
					const status = res.data.status;
					if (status === -100) {
						// msg('登录信息已过期，请重新登录');
						store.commit('logout');
						// uni.navigateTo({
						// 	url: '/pages/auth/login'
						// })
					}
				}
				// if (res.data) {
				// 	const code = res.data.code;
				// 	const status = res.data.status;
				// 	//token无效
				// 	if (code === 30201 || code === 30202 || code === 30203 || code === 30204) {
				// 		msg('登录信息已过期，请重新登录');
				// 		store.commit('logout');
				// 		reject('无效的登录信息');
				// 		return;
				// 	} else if (code === 10001) {
				// 		msg('用户已被禁用，请联系客服处理');
				// 		store.commit('logout');
				// 		// if (operation !== 'login' && operation !== 'loginByWeixin') {
				// 		// 	store.commit('logout');
				// 		// }
				// 		setTimeout(() => {
				// 			uni.switchTab({
				// 				url: '/pages/tabbar/home'
				// 			})
				// 		}, 1200)
				// 		reject('用户被禁用');
				// 		return;
				// 	}
				// 	// else if (status !== 1) {
				// 	// 	msg(res.data.msg);
				// 	// 	reject(res.data.msg);
				// 	// 	return;
				// 	// }
				// }
				resolve(res.data);
			},
			fail(err) {
				reject(err);
			}
		})
	})
}
