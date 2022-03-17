import {
	weixinLogin
} from '@/api/user.js';
export default {
	// #ifdef H5
	data() {
		return {
			'mpCodeTimer': 0,
			'mpWxCode': ''
		};
	},
	methods: {
		//h5登录
		h5WxGetUserInfo() {
			if (!this.agreement) {
				this.$util.msg('请阅读并同意用户服务及隐私协议');
				return;
			}
			this.$util.throttle( async () => {
				// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4a22b50d7e897f97&redirect_uri=http%3a%2f%2fad.seewo.com%2foauth.php&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect

				const wxInfo = {
					// "code": this.mpWxCode,
					// // ...profileRes.userInfo,
					// "iv": profileRes.iv,
					// "encryptedData": profileRes.encryptedData,
					"invite": this.$store.state.invite,
					"platform": 2
				}
				const loginRes = await weixinLogin(wxInfo);
				window.location.href = loginRes.result
			})

		},
	}
	// #endif
};
