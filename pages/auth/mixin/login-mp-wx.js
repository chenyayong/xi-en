import {
	weixinLogin
} from '@/api/user.js';
export default {
	// #ifdef MP-WEIXIN
	data() {
		return {
			'mpCodeTimer': 0,
			'mpWxCode': ''
		};
	},
	'computed': {
		timerIdent() {
			return this.$store.state.timerIdent;
		}
	},
	'watch': {
		timerIdent() {
			this.mpCodeTimer++;
			// console.log('timerIdent', this.mpCodeTimer % 60 === 0)
			if (this.mpCodeTimer % 60 === 0) {
				// this.getMpWxCode();
			}
		}
	},
	onShow() {
		this.getMpWxCode();
	},
	'methods': {
		//微信小程序登录
		mpWxGetUserInfo() {
			if (!this.agreement) {
				this.$util.msg('请阅读并同意用户服务及隐私协议');
				return;
			}

			this.$util.throttle(() => {
				uni.getUserProfile({
					'desc': '用于展示您的头像及昵称',
					'success': async profileRes => {
						// const res = await this.$request('user', 'loginByWeixin', {
						// 	code: this.mpWxCode,
						// 	...profileRes.userInfo
						// }, {
						// 	showLoading: true
						// });
						const wxInfo = {
							"code": this.mpWxCode,
							// ...profileRes.userInfo,
							"iv": profileRes.iv,
							"encryptedData": profileRes.encryptedData,
							"invite": this.$store.state.invite,
							"platform": 1
						}
						const loginRes = await weixinLogin(wxInfo);
						// status -1 没有绑定用户手机
						if (loginRes.status === -1) {
							this.navTo('/pages/auth/bindMobile', {
								success(res) {
									wxInfo.user_id = loginRes.result.user_id
									res.eventChannel.emit('wxInfo', wxInfo)
								}
							});
							// this.$util.msg(res.msg);
							return;
						}
						if (loginRes.status === 1 && loginRes.result) {
							this.loginSuccessCallBack({
								'token': loginRes.result,
								// 'tokenExpired': res.data.tokenExpired
							});
						} else {
							this.$util.msg(loginRes.msg);
							// this.navTo('/pages/auth/bindMobile?data='+JSON.stringify(res.data));
						}
						// if (loginRes.hasBindMobile && res.data.token) {
						// 	this.loginSuccessCallBack({
						// 		'token': res.data.token,
						// 		'tokenExpired': res.data.tokenExpired
						// 	});
						// } else {
						// 	this.$util.msg(loginRes.msg);
						// 	// this.navTo('/pages/auth/bindMobile?data='+JSON.stringify(res.data));
						// }
					}
				});
			});
		},
		//获取code
		getMpWxCode() {
			uni.login({
				'provider': 'weixin',
				'success': res => {
					this.mpWxCode = res.code;
				}
			});
		}

	}
	// #endif
};
