<template>
	<view class="app column">
		<view class="main-wrap" :class="{ show: loaded }">
			<view class="addr-sec" @click="navTo('/pages/address/list?choose=1&id=' + addr.id)">
				<!-- <view v-if="!addr._id" class="addr-empty row fill">
					<text class="mix-icon icon-dizhi"></text>
					<text>请选择收货地址</text>
				</view>
				<view v-else class="addr-wrap">
					<text class="mix-icon icon-dizhi"></text>
					<view class="con column">
						<text class="addr">{{ addr.address.address }} {{ addr.address.room }}</text>
						<text class="name">{{ addr.name }} {{ addr.mobile }}</text>
					</view>
				</view> -->
				<view v-if="!addr.address_id" class="addr-empty row fill">
					<text class="mix-icon icon-dizhi"></text>
					<text>请选择收货地址</text>
				</view>
				<view v-else class="addr-wrap">
					<text class="mix-icon icon-dizhi"></text>
					<view class="con column">
						<text class="addr">{{ addr.address }} {{ addr.room }}</text>
						<text class="name">{{ addr.consignee }} {{ addr.mobile }}</text>
					</view>
				</view>
				<text class="mix-icon icon-you"></text>
				<image class="bg" src="/static/icon/addr-line.png"></image>
			</view>
			<!-- 商品列表 -->
			<view class="goods-sec"><product-list :list="data.products"></product-list></view>
			<!-- 价格信息 -->
			<view class="price-sec">
				<view class="cell row">
					<text class="tit fill">商品金额</text>
					<text class="price">￥{{ goodsTotal | price(2) }}</text>
				</view>
				<view class="cell row">
					<text class="tag">会员</text>
					<text class="tit fill">等级优惠</text>
					<text class="price" :class="{ red: fullReductionMoney > 0 }">-￥{{ fullReductionMoney || 0 }}</text>
					<!-- red -->
				</view>
				<view class="cell row">
					<text class="tit fill">积分抵扣</text>

					<view class="row" v-if="is_check_points === 1">
						<text class="mix-icon icon-xuanzhong" @click="changePayPoints"></text>
						<text>{{ points_sum }}积分可抵扣{{ points_money }}元</text>
					</view>

					<view class="row" v-else>
						<text class="mix-icon icon-yk_yuanquan" @click="changePayPoints"></text>
						使用积分
					</view>
				</view>
				<!-- <view class="cell row" @click="showCouponPopup">
					<text class="tag red">券</text>
					<text class="tit fill">优惠券</text>
					<text v-if="data.coupons.length === 0" class="price disabled">暂无可用</text>
					<template v-else>
						<text v-if="curCoupon._id" class="price red">-￥{{ curCoupon.coupon_money }}</text>
						<text v-else class="price red" style="font-weight: normal;">请选择优惠券</text>
						<text class="mix-icon icon-you"></text>
					</template>
				</view>
				<view class="cell row">
					<text class="tit fill">配送费</text>
					<text class="price">￥0</text>
				</view> -->
				<view class="total row b-t">
					<text class="price">￥{{ payTotal | price(2) }}</text>
				</view>
			</view>
			<view class="remarks column">
				<text class="title">订单备注：</text>
				<textarea class="input" auto-height v-model="remarks" placeholder="选填，合理需求我们会尽量满足 .." placeholder-style="color: #999" />
			</view>
			<!-- 底部栏 -->
			<view class="bot-fill-view"></view>
			<view class="bottom row">
				<view class="fill">
					<text class="tip">实付款：</text>
					<text class="price fill">￥{{ payTotal | price(2) }}</text>
				</view>
				<view class="btn center" @click="createOrder"><text>提交订单</text></view>
			</view>
		</view>
		<!-- 优惠券弹窗 -->
		<!-- <coupon-select ref="couponSelect" :list="data.coupons" @confirm="onCheckCoupon"></coupon-select> -->

		<mix-loading v-if="isLoading" :type="loaded ? 1 : 2" :mask="true"></mix-loading>
	</view>
</template>

<script>
import productList from './components/product-list.vue';
import couponSelect from './components/coupon-select.vue';
import { getOrderPayPrice, createOrder } from '@/api/orders.js';
import { getAddress } from '@/api/address.js';
export default {
	components: {
		productList,
		couponSelect
	},
	data() {
		return {
			remarks: '', //备注
			addr: {}, //地址信息
			data: {
				products: [],
				coupons: []
			},
			curCoupon: {},
			payTotal: 0, //支付价格
			fullReductionMoney: 0, //满减金额
			points_sum: 0, // 积分
			points_money: 0, // 积分抵扣金额
			is_check_points: 0, // 是否积分抵扣
			addressData: []
		};
	},
	computed: {
		//商品总价
		goodsTotal() {
			if (this.data.products.length === 0) {
				return 0;
			}
			let total = 0;
			this.data.products.forEach(item => {
				total += item.price * item.number;
			});
			return total;
		}
	},
	onLoad(options) {
		if (options.type === 'cart') {
			//购物车结算
			this.createType = 'cart';
			this.cartIds = options.ids;
		} else {
			this.createType = 'buyNow';
			// this.buyData = JSON.parse(options.data);
		}
		this.loadData();
	},
	methods: {
		async getAddress() {
			const res = await getAddress();
			// this.addressData = res.result.address_lists;
			if (res.status === 1 && res.result.address_lists && res.result.address_lists.length) {
				const item = res.result.address_lists.find(item => item.is_default === 1);
				this.addr = item;
			}
			// const res = await this.$request(
			// 	'address',
			// 	'get',
			// 	{},
			// 	{
			// 		showLoading: !this.loaded
			// 	}
			// );
			// this.list = res.data;
		},
		async loadData() {
			// const operation = this.createType === 'cart' ? 'getCartConfirmData': 'getBuyNowConfirmData';
			// const sendData = this.createType === 'cart' ? {
			// 	ids: this.cartIds.split(',')
			// } : this.buyData;
			// const res = await this.$request('order', operation, sendData, {showLoading: true})
			// this.addr = res.data.address;
			// this.data = res.data;
			// console.log(JSON.parse(JSON.stringify(res.data)));
			// this.getOrderPayPrice();
			this.getAddress();
			this.loaded = true;
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.once('goodsData', data => {
				this.data.products = data;
				console.log('goodsData', data)
				this.getOrderPayPrice();
			});
		},
		//计算订单价格
		async getOrderPayPrice() {
			const res = await getOrderPayPrice({
				order_amount: this.goodsTotal,
				is_check_points: this.is_check_points
			});

			this.payTotal = res.result.total_amount || 0;
			this.fullReductionMoney = res.result.discount_amount;
			this.points_sum = res.result.points_sum;
			this.points_money = res.result.points_money;
			// const res = await this.$request('order', 'getOrderPayPrice', {
			// 	goods_price: this.goodsTotal,
			// 	address_id: this.addr._id || '',
			// 	coupon_id: this.curCoupon._id || ''
			// }, {showLoading: this.payTotal > 0})
			// this.payTotal = res.pay_price || 0;
			// this.fullReductionMoney = res.full_reduction_money;
		},
		changePayPoints() {
			this.is_check_points = this.is_check_points === 0 ? 1 : 0;
			this.getOrderPayPrice();
		},
		//创建订单
		createOrder() {
			this.$util.throttle(async () => {
				if (!this.addr.address_id) {
					this.$util.msg('请选择收货地址');
					return;
				}
				this.isLoading = true;
				const data = this.getCreateData();
				// const operation = this.createType === 'cart' ? 'addByCart' : 'addBuyNow';
				// const res = await this.$request('order', operation, data);
				const res = await createOrder(data);
				this.isLoading = false;
				// uni.redirectTo({
				// 	url:
				// 		'/pages/wallet/pay?data=' +
				// 		JSON.stringify({
				// 			sourcePage: 'createOrder',
				// 			order_id: '5f1534f0bb1edd0001a93a2c',
				// 			pay_price: 450
				// 		})
				// });
				if (res.status === 1) {
					if (this.createType === 'cart') {
						// uni.$emit('refreshCart'); //刷新购物车
						// this.$store.dispatch('getCartCount'); //刷新购物车数量个
						this.$store.commit('deleteAllCartOrders'); // 清空购物车
					}
					uni.redirectTo({
						url:
							'/pages/wallet/pay?data=' +
							JSON.stringify({
								sourcePage: 'createOrder',
								// ...res.data
								pay_price: this.payTotal,
								order_id: res.result.order_id
							})
					});
				} else {
					this.$util.msg(res.msg);
				}
			});
		},
		//获取创建订单参数
		getCreateData() {
			const data = {
				remarks: this.remarks,
				address_id: this.addr.address_id,
				// buy_type: this.createType === 'buyNow' ? 1 : 2,
				buy_type: 1,
				order_amount: this.goodsTotal,
				total_amount: this.payTotal,
				is_check_points: this.is_check_points
				// coupon_id: this.curCoupon._id || '',
				// // #ifdef H5
				// source_type: 1,
				// // #endif
				// // #ifdef APP-PLUS
				// source_type: 2,
				// // #endif
				// // #ifdef MP-WEIXIN
				// source_type: 3
				// // #endif
			};
			//购物车结算
			// if (this.createType === 'cart') {
			// 	data.ids = this.cartIds.split(',');
			// } else {
			// 	data.product = this.data.products[0];
			// }
			data.goods = this.data.products.map(e => {
				return {
					goods_id: e.id,
					number: e.number,
					item_id: e.sku.id
				};
			});
			return data;
		},
		//设置收货地址
		setAddress(addr) {
			this.addr = addr;
			this.getOrderPayPrice();
		},
		//打开优惠券弹窗
		showCouponPopup() {
			if (this.data.coupons.length > 0) {
				this.$refs.couponSelect.curCoupon = this.curCoupon;
				this.$refs.couponSelect.open();
			}
		},
		//优惠券选择回调
		onCheckCoupon(curCoupon) {
			this.curCoupon = curCoupon;
			this.getOrderPayPrice();
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}
</style>
<style scoped lang="scss">
.icon-xuanzhong {
	font-size: 36rpx;
	color: $base-color;
}
.b-b:after {
	left: 4rpx;
	right: 4rpx;
	border-color: #ececec;
}
.app {
	padding: 16rpx 24rpx 20rpx;
}
.main-wrap {
	opacity: 0;
	transition: 0.2s;

	&.show {
		opacity: 1;
	}
}
.addr-sec {
	display: flex;
	padding: 20rpx;
	background-color: #fff;
	border-radius: 10rpx;
	position: relative;
	overflow: hidden;

	.addr-empty {
		margin: 16rpx 0 24rpx;
		font-size: 30rpx;
		color: #666;

		.icon-dizhi {
			transform: translateY(0rpx);
			margin-right: 16rpx;
		}
	}
	.addr-wrap {
		display: flex;
		flex: 1;
	}
	.icon-dizhi {
		transform: translateY(6rpx);
		font-size: 32rpx;
		color: $base-color;
	}
	.icon-you {
		flex-shrink: 0;
		transform: translateY(50%);
		position: relative;
		top: -14rpx;
		font-size: 26rpx;
		color: #999;
	}
	.con {
		flex: 1;
		padding: 0 80rpx 10rpx 20rpx;
	}
	.addr {
		margin-bottom: 16rpx;
		font-size: 30rpx;
		color: #333;
		line-height: 1.4;
		font-weight: 700;
	}
	.name {
		font-size: 28rpx;
		color: #999;
	}
	.bg {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 4rpx;
	}
}
.goods-sec {
	margin-top: 16rpx;
	background-color: #fff;
	border-radius: 10rpx 10rpx 0 0;
	overflow: hidden;
}
.price-sec {
	padding-top: 14rpx;
	border-radius: 0 0 10rpx 10rpx;
	background-color: #fff;

	.cell {
		height: 68rpx;
		padding: 0 24rpx;
		font-size: 26rpx;
		color: #333;
	}
	.price {
		font-weight: 700;

		&.red {
			color: $base-color;
		}
		&.disabled {
			color: #999;
			font-weight: normal;
		}
	}
	.total {
		justify-content: flex-end;
		height: 80rpx;
		padding-right: 20rpx;
		margin-top: 16rpx;
		font-size: 30rpx;
		color: #333;

		.price:before {
			content: '小计：';
			font-weight: normal;
		}
	}
	.tag {
		padding: 6rpx 8rpx;
		margin-right: 8rpx;
		font-size: 20rpx;
		color: #fff;
		border-radius: 8rpx;
		background-color: orange;

		&.red {
			background-color: $base-color;
		}
	}
	.icon-you {
		margin-left: 8rpx;
		font-size: 20rpx;
		color: #999;
	}
	.mix-icon {
		margin-right: 10rpx;
	}
}
.remarks {
	padding: 24rpx 24rpx;
	margin-top: 16rpx;
	border-radius: 12rpx;
	background-color: #fff;

	.title {
		margin-bottom: 24rpx;
		font-size: 30rpx;
		color: #333;
		font-weight: 700;
	}
	.input {
		flex: 1;
		min-height: 140rpx;
		font-size: 28rpx;
		color: #333;
	}
}
.bot-fill-view {
	width: 100%;
	height: 100rpx;
	box-sizing: content-box;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
.bottom {
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 90;
	width: 100%;
	height: 100rpx;
	background-color: #fff;
	box-shadow: 0 -2rpx 10rpx 0 rgba(0, 0, 0, 0.06);
	box-sizing: content-box;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);

	.tip {
		margin-left: 24rpx;
		font-size: 28rpx;
		color: #999;
	}
	.price {
		margin-right: 30rpx;
		font-size: 36rpx;
		color: $base-color;
		font-weight: 700;
		text-align: right;
	}
	.btn {
		min-width: 180rpx;
		height: 70rpx;
		padding: 0 26rpx;
		margin-right: 20rpx;
		border-radius: 100rpx;
		background-color: $base-color;
		font-size: 30rpx;
		color: #fff;
	}
}
</style>
