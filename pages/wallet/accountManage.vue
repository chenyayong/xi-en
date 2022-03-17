<template>
	<view class="app">
		<view class="cell row b-b">
			<text class="tit">姓名</text>
			<input class="input" type="text" maxlength="10" v-model="from.realname" placeholder="请输入姓名" placeholder-class="placeholder" />
		</view>
		<view class="cell row b-b">
			<text class="tit">身份证</text>
			<input class="input" type="number" maxlength="18" v-model="from.idcard" placeholder="请输入身份证" placeholder-class="placeholder" />
		</view>
		<view class="cell row b-b">
			<text class="tit">银行账号</text>
			<input class="input" type="number" maxlength="20" v-model="from.bank_card" placeholder="请输入银行账号" placeholder-class="placeholder" />
		</view>
		<picker :range="bank_list" range-key="bankname" @change="handleChangeBank">
			<view class="cell row b-b">
				<view class="tit">开户行</view>
				<view style="text-align: right;color: #999;">{{ bank_text }}</view>
				<!-- <input type="text" v-model="from.bank_branch" class="font-30" placeholder="请输入开户行名称" placeholder-class="D7"> -->
			</view>
		</picker>
		<view class="cell row b-b">
			<text class="tit">开户支行</text>
			<input class="input" type="text" maxlength="30" v-model="from.bank_branch" placeholder="请输入开户支行" placeholder-class="placeholder" />
		</view>
		<view class="cell row b-b">
			<text class="tit">手机号码</text>
			<input class="input" type="number" maxlength="11" v-model="from.mobile" placeholder="请输入手机号码" placeholder-class="placeholder" />
		</view>
		<mix-button ref="confirmBtn" text="提交" marginTop="60rpx" @onConfirm="submit"></mix-button>
	</view>
</template>

<script>
import { getChooseBankcard, addBankcard } from '@/api/wallet.js';
export default {
	data() {
		return {
			from: {
				bank_type: 1,
				realname: '',
				idcard: '',
				bank_branch: '',
				mobile: '',
				bank_card: '',
				bank_name: '',
				paypwd: ''
			},
			bank_list: [],
			bank_text: '请选择'
		};
	},
	onLoad(options) {
		this.getChooseBankcard();
	},
	methods: {
		async getChooseBankcard() {
			const res = await getChooseBankcard();
			if (res.status === 1) {
				this.bank_list = res.result.bank_type;
			} else {
				this.$util.msg(res.msg);
			}
		},
		async submit() {
			let checkout = this.checkoutFormData();
			if (checkout) {
				const res = await addBankcard(this.from);
				this.$util.msg(res.msg);
				if (res.status === 1) {
					this.$util.prePage().loadData();
					setTimeout(() => {
						uni.navigateBack();
					}, 1000);
				}
			}
			this.$refs.confirmBtn.stop();

			// if (this.data.address_id) {
			// 	data.address_id = this.data.address_id;
			// 	res = await editAddress(data);
			// } else {
			// 	res = await addAddress(data);
			// }

			// this.$util.msg(res.msg);
			// if (res.status === 1) {
			// 	this.$util.prePage().loadData();
			// 	setTimeout(() => {
			// 		uni.navigateBack();
			// 	}, 1000);
			// }
		},
		checkoutFormData() {
			let value = true;
			if (!this.from.realname) {
				this.$util.msg('请输入姓名');
				value = false;
			}
			if (!this.from.idcard) {
				this.$util.msg('请输入身份证号码');
				value = false;
			}
			if (!this.from.bank_card) {
				this.$util.msg('请输入银行账号');
				value = false;
			}
			if (!this.from.bank_name) {
				this.$util.msg('请选择开户行');
				value = false;
			}
			if (!this.from.bank_branch) {
				this.$util.msg('请输入银行支行');
				value = false;
			}
			if (!this.from.mobile) {
				this.$util.msg('请输入手机号');
				value = false;
			}
			return value;
		},
		handleChangeBank(e) {
			let index = e.target.value;
			this.bank_text = this.bank_list[index].bankname;
			this.from.bank_name = this.bank_list[index].id;
		}
	}
};
</script>

<style scoped lang="scss">
.app {
	padding: 10rpx 44rpx 0;
}
.cell {
	height: 106rpx;

	.tit {
		min-width: 130rpx;
		font-size: 30rpx;
		color: #333;
	}
	.input {
		flex: 1;
		font-size: 30rpx;
		color: #333;
	}
	.icon-you {
		flex-shrink: 0;
		margin-right: 8rpx;
		margin-left: 40rpx;
		font-size: 24rpx;
		color: #aaa;
	}
	switch {
		transform: scale(0.8) translateX(10rpx);
		transform-origin: center right;
	}
}
</style>
