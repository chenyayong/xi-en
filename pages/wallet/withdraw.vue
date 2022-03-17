<template>
	<view class="app">
		<view class="segmented-control">
			<uni-segmented-control
				:current="current"
				:values="items"
				@clickItem="onClickItem"
				styleType="text"
				activeColor="rgb(255, 83, 111)"
			></uni-segmented-control>
		</view>
		<view class="block">
			<uni-list>
				<uni-list-item
					title="收款账户"
					:note="charge_tips"
					:rightText="bankname"
					link
					@click="navTo('/pages/wallet/accountList?choose=1&id=' + bank_id, { login: true })"
				></uni-list-item>
				<uni-list-item title="提现金额" :note="user_money_tips">
					<template slot="footer">
						<view class="row" style="text-align: right;">
							<input type="number" v-model="withdrawals" placeholder="请输入金额" />
							<uni-tag @click="handleAllWithdrawals" style="margin-left: 20rpx;" text="全部提现" inverted type="error"></uni-tag>
						</view>
					</template>
				</uni-list-item>
			</uni-list>
		</view>

		<view class="block" style="padding: 0 60rpx;"><view class="confirm-btn center" @click="handleSubmitWithdrawals">立即提现</view></view>

		<view class="rule-content"><jyf-parser ref="article" :html="content" lazy-load show-with-animation></jyf-parser></view>
		<!-- <view class="segmented-control-content">
			<view class="row block">
				<view class="block-label">收款账户</view>
				<view class="fill primary-theme" @click="navTo('/pages/wallet/accountList')">
					请选择
					<view class="commission" style="position: absolute;">提现手续费</view>
				</view>
			</view>
			<view class="block">
				<view class="block-label">提现金额</view>
				<view class="block-input-wrapper row">
					<text class="symbol">¥</text>
					<view class=""><input type="text" placeholder="请输入金额" /></view>
				</view>
			</view>
			<view class="block row">
				<view class="fill commission">可提现金额</view>
				<view class="primary-theme">全部提现</view>
			</view>
			<view class="block"><view class="confirm-btn center">立即提现</view></view>
		</view>
		<mix-action-sheet ref="mixActionSheet"></mix-action-sheet> -->
	</view>
</template>

<script>
import { getWithdrawRule } from '@/api/article.js';
import { withdrawals } from '@/api/user.js';
export default {
	data() {
		return {
			withdrawals: '',
			user_money: '',
			charge: '',
			content: '',
			bank_id: '',
			bankname: '请选择银行账户',
			current: 0,
			items: ['银行卡']
		};
	},
	onLoad() {
		this.getRule();
		this.getWithdrawalsData();
	},
	computed: {
		user_money_tips() {
			return `可提现金额${this.user_money}`;
		},
		charge_tips() {
			return `提现手续费${this.charge}%`;
		}
	},
	methods: {
		async getRule() {
			const res = await getWithdrawRule({
				id: 9
			});
			if (res.status === 1) {
				this.content = res.result.topic_content;
			} else {
				this.$util.msg(res.msg);
			}
		},
		async getWithdrawalsData() {
			//bank_type  1是银行卡，2是微信，3是支付宝
			const res = await withdrawals({
				bank_type: 1
			});
			if (res.status === 1) {
				this.user_money = res.result.user_money;
				this.charge = res.result.charge;
			} else {
				this.$util.msg(res.msg);
			}
		},
		async submitWithdrawalsData() {
			const res = await withdrawals(
				{
					type: 1,
					bank_id: this.bank_id,
					money: this.withdrawals
					// paypwd: ''
				},
				'post'
			);
			this.$util.msg(res.msg);
			if (res.status === 1) {
				this.$util.prePage().loadData();
				setTimeout(() => {
					uni.navigateBack();
				}, 1000);
			}
		},
		handleSubmitWithdrawals() {
			this.submitWithdrawalsData();
		},
		handleAllWithdrawals() {
			this.withdrawals = this.user_money;
		},
		setCard(item) {
			if (item.bank_id) {
				this.bankname = `${item.bankname}(${item.bank_card})`;
				this.bank_id = item.bank_id;
			} else {
				this.bankname = '请选择银行账户';
				this.bank_id = '';
			}
			console.log('setCard', item);
		},
		onClickItem(obj) {
			this.current = obj.currentIndex;
		}
	}
};
</script>

<style scoped lang="scss">
.app /deep/ .uni-list-item__content-title {
	font-size: 32rpx;
}
.app /deep/ .uni-list-item__content-note {
	font-size: 28rpx;
}
.app /deep/ .uni-list-item__extra-text {
	font-size: 28rpx;
}
.rule-content {
	padding: 40rpx;
}
.block {
	margin-bottom: 80rpx;
	font-size: 32rpx;
	.block-label {
		padding-right: 130rpx;
	}
	.symbol {
		font-size: 40rpx;
		margin-right: 10rpx;
	}
	.commission {
		color: #ccc;
		font-size: 28rpx;
		// color: rgb(255, 83, 111);
	}
	.confirm-btn {
		margin-top: 80rpx;
		width: 100%;
		height: 84rpx;
		background-color: $base-color;
		font-size: 32rpx;
		color: #fff;
		border-radius: 100rpx;
	}
	.primary-theme {
		color: $base-color;
	}
	.block-input-wrapper {
		margin-top: 10rpx;
		position: relative;
		padding-bottom: 20rpx;
		&::after {
			content: '';
			position: absolute;
			left: 0;
			width: 100%;
			bottom: 0;
			background-color: #dedede;
			height: 1px;
			transform: scaleY(50%);
		}
	}
}

.segmented-control-content {
	margin-top: 20rpx;
	font-size: 32rpx;
	color: #333;
	padding: 40rpx 80rpx;
}
</style>
