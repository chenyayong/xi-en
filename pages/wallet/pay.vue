<template>
	<view class="app column">
		<view class="price-wrapper center column">
			<text>支付金额</text>
			<text class="price">{{ data.pay_price | price(2) }}</text>
			<!-- <text class="price">{{ data.order_amount | price(2) }}</text> -->
		</view>

		<view class="cell row b-b" @click="checkType('wxpay')">
			<image class="icon" :src="'/static/icon/wxpay.png'"></image>
			<view class="column fill"><text class="tit">微信支付</text></view>
			<text v-if="curType === 'wxpay'" class="mix-icon icon-xuanzhong"></text>
		</view>
		<!-- #ifndef MP-WEIXIN -->
		<!-- <view class="cell row b-b" @click="checkType('alipay')">
			<image class="icon" :src="'/static/icon/alipay.png'"></image>
			<view class="column fill"><text class="tit">支付宝</text></view>
			<text v-if="curType === 'alipay'" class="mix-icon icon-xuanzhong"></text>
		</view> -->
		<!-- #endif -->
		<!-- <view class="cell row b-b" @click="checkType('balance')">
			<image class="icon" :src="'/static/icon/balance.png'"></image>
			<view class="column fill">
				<text class="tit">余额</text>
				<text class="tip">账户可用余额 ￥{{ userInfo.money | price }}</text>
			</view>
			<text v-if="curType === 'balance'" class="mix-icon icon-xuanzhong"></text>
		</view> -->

		<mix-button ref="confirmBtn" text="确认支付" marginTop="80rpx" @onConfirm="confirm"></mix-button>
		<!-- 支付成功面板 -->
		<success-modal ref="successModal" :price="data.pay_price" @onConfirm="successCallback"></success-modal>
		<!-- 支付密码键盘 -->
		<pay-password-keyboard ref="pwdKeyboard" @onConfirm="balancePay"></pay-password-keyboard>

		<mix-loading v-if="isLoading" :mask="true"></mix-loading>

		<mix-modal ref="mixModal" text="您还没有设置支付密码" confirmText="立即设置" @onConfirm="navTo('/pages/auth/payPassword')"></mix-modal>
	</view>
</template>

<script>
import successModal from './components/success-modal.vue';
import { payOrder } from '@/api/orders.js';
export default {
	components: {
		successModal
	},
	data() {
		return {
			curType: 'wxpay',
			data: {
				// order_id: '5f1534f0bb1edd0001a93a2c',
				// pay_price: 450,
				// sourcePage: 'createOrder'
			}
		};
	},
	computed: {
		userInfo() {
			return this.$store.state.userInfo;
		}
	},
	onLoad(options) {
		const data = JSON.parse(options.data);
		this.data = data;
	},
	methods: {
		confirm() {
			this.$util.throttle(() => {
				if (this.curType === 'balance') {
					if (!this.userInfo.money || this.userInfo.money < this.data.pay_price) {
						this.$util.msg('余额不足');
						this.$refs.confirmBtn.stop();
						return;
					}
					if (!this.userInfo.pay_password) {
						this.$refs.mixModal.open();
						this.$refs.confirmBtn.stop();
						return;
					}
					//余额支付 打开支付密码键盘
					this.$refs.pwdKeyboard.open();
					this.$refs.confirmBtn.stop();
				} else {
					this.payByUnipay();
				}
			});
		},
		//余额支付 提交支付
		async balancePay(pwd) {
			const res = await this.$request(
				'order',
				'payOrder',
				{
					order_id: this.data.order_id,
					pay_password: pwd,
					pay_type: this.curType
				},
				{ showLoading: true }
			);
			if (res.status === 1) {
				this.$store.dispatch('getUserInfo');
				this.$refs.pwdKeyboard.close();
				this.$refs.successModal.open();
			} else {
				this.$util.msg(res.msg);
				this.$refs.pwdKeyboard.pwd = '';
			}
		},
		h5Pay(data) {
			const that = this;
			function onBridgeReady() {
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest',
					{
						appId: data.appid, //公众号ID，由商户传入
						timeStamp: data.timeStamp, //时间戳，自1970年以来的秒数
						nonceStr: data.nonceStr, //随机串
						package: data.package,
						signType: 'MD5', //微信签名方式：
						paySign: data.paySign
					},
					function(res) {
						if (res.err_msg == 'get_brand_wcpay_request:ok') {
							that.$refs.confirmBtn.death();
							that.$refs.successModal.open();
							// 使用以上方式判断前端返回,微信团队郑重提示：
							//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
						}
					}
				);
			}
			if (typeof WeixinJSBridge == 'undefined') {
				if (document.addEventListener) {
					document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
				} else if (document.attachEvent) {
					document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
					document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
				}
			} else {
				onBridgeReady();
			}
		},
		weixinPay(data) {
			const { timeStamp, nonceStr, paySign } = data;
			const payParams = {
				// provider: this.curType,
				// orderInfo: res.data.orderInfo,
				timeStamp,
				nonceStr,
				paySign,
				package: data.package,
				signType: 'MD5',
				success: e => {
					this.$refs.confirmBtn.death();
					this.$refs.successModal.open();
				},
				fail: err => {
					this.$refs.confirmBtn.stop();
					if (err.errMsg.indexOf('取消') > -1 || err.errMsg.indexOf('cancel') > 1 || err.errMsg.indexOf('-2') > -1) {
						this.$util.msg('取消支付');
					} else {
						this.$util.msg('支付遇到错误，请稍候重试');
						console.log(err);
					}
				}
			};
			uni.requestPayment(payParams);
		},
		//unipay
		async payByUnipay() {
			const res = await payOrder({
				order_id: this.data.order_id,
				// #ifdef MP-WEIXIN
				openid: this.$store.state.userInfo.mini_openid,
				// #endif
				
				// #ifdef H5
				openid: this.$store.state.userInfo.openid,
				// #endif
				
				// #ifdef H5
				pay_type: 2,
				// #endif
				
				// #ifdef MP-WEIXIN
				pay_type: 1,
				pay_code: await this.getMpCode('weixin'),
				// #endif
			});
			if (res.status !== 1) {
				this.$refs.confirmBtn.stop();
				console.log(res);
				this.$util.msg(res.msg || '获取支付信息失败');
				return;
			}

			// #ifdef MP-WEIXIN
			const orderInfo = res.result;
			this.weixinPay(orderInfo);
			// #endif

			// #ifdef H5
			const data = res.result;
			this.h5Pay(data);
			// #endif
		},
		//统一支付成功回调
		successCallback() {
			switch (this.data.sourcePage) {
				case 'createOrder':
					uni.redirectTo({
						url: '/pages/order/detail?id=' + this.data.order_id
					});
					break;
				case 'orderList':
					this.$util.prePage().refreshList(false);
					uni.redirectTo({
						url: '/pages/order/detail?id=' + this.data.order_id
					});
					break;
				case 'orderDetail':
					this.$util.prePage().loadData();
					uni.navigateBack();
					break;
			}
		},
		//选择支付方式
		checkType(type) {
			this.curType = type;
		},
		//获取小程序code
		// #ifdef MP
		getMpCode(provider) {
			return new Promise(resolve => {
				uni.login({
					provider,
					success(res) {
						resolve(res.code);
					}
				});
			});
		}
		// #endif
	}
};
</script>

<style scoped lang="scss">
.app {
	padding: 0 80rpx;
	align-items: center;

	/deep/ {
		.mix-btn-content {
			width: 560rpx;
		}
	}
}
.price-wrapper {
	background-color: #fff;
	height: 260rpx;
	font-size: 28rpx;
	color: #909399;

	.price {
		font-size: 56rpx;
		color: #333;
		margin-top: 20rpx;
		font-weight: 600;

		&:before {
			content: '￥';
			font-size: 40rpx;
		}
	}
}
.cell {
	width: 100%;
	height: 124rpx;

	.icon {
		width: 44rpx;
		height: 44rpx;
		margin-right: 32rpx;
	}
	.tit {
		flex: 1;
		font-size: 30rpx;
		color: #333;
		font-weight: 700;
	}
	.tip {
		margin-top: 14rpx;
		font-size: 24rpx;
		color: #999;
	}
	.icon-xuanzhong {
		font-size: 36rpx;
		color: $base-color;
	}
}
</style>
