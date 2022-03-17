<template>
	<view class="app">
		<view class="main-wrap" :class="{ show: loaded }">
			<template v-if="list.length > 0">
				<view class="list-item" v-for="(item, index) in list" :key="index" @click="chooseCard(item)">
					<view class="card-image" v-if="item.bank_type === 1">
						<image src="/static/wallet/bank_card.png" mode="" />
						银行卡
					</view>
					<view class="card-image" v-else>
						<image src="/static/zhifubao.png" mode="" />
						支付宝
					</view>
					<view class="">{{ item.realname }}</view>
					<view class="flex">
						<view v-if="item.bank_type === 1">{{ item.bankname }}({{ item.bank_card }})</view>
						<view v-else>{{ item.bank_card }}</view>
						<text class="mix-icon icon-lajitong" @click.stop="showDelModal(index)"></text>
						<!-- <text class="mix-icon icon-bianji"></text> -->
					</view>
				</view>
			</template>
			<view class="bot-btn-wrap fix-bot">
				<mix-button text="新增收款账户" icon="icon-jia2" :iconSize="36" :isConfirm="false" @onConfirm="navTo('accountManage')"></mix-button>
			</view>
		</view>

		<mix-modal ref="mixModal" title="提示" text="确定要删除该银行卡号吗" @onConfirm="deleteCard"></mix-modal>

		<mix-loading v-if="isLoading" :type="list.length > 0 ? 1 : 2"></mix-loading>
		<!-- 缺省 -->
		<mix-empty v-else-if="loaded && list.length === 0" backgroundColor="#fff"></mix-empty>
	</view>
</template>

<script>
import { getBankcardList, delBankcard } from '@/api/wallet.js';
export default {
	data() {
		return {
			list: []
		};
	},
	onLoad(options) {
		this.isChoose = !!options.choose;
		this.choosedId = options.id;
		this.loadData();
	},
	methods: {
		async loadData() {
			this.isLoading = true;
			const res = await getBankcardList();
			if (res.status === 1) {
				this.list = res.result.bankcard_list;
			} else {
				this.$util.msg(res.msg);
			}
			this.loaded = true;
			this.isLoading = false;
		},
		/**
		 * 删除地址
		 * 注意 删除成功已选择的地址需要清空
		 */
		async deleteCard(item, index) {
			const id = this.list[this.curIndex].bank_id;
			const res = await delBankcard({
				id: id
			});
			this.$util.msg(res.msg);
			if (res.status === 1) {
				this.list.splice(this.curIndex, 1);
				const deleVerify = this.choosedId == id;
				if (this.isChoose && deleVerify) {
					this.$util.prePage().setCard({});
				}
			}
			
		},
		chooseCard(item) {
			if (!this.isChoose) {
				return;
			}
			this.$util.prePage().setCard(item);
			uni.navigateBack();
		},
		//编辑地址
		// editAddr(item) {
		// 	this.navTo(`manage?data=${JSON.stringify(item)}`);
		// },
		showDelModal(index) {
			this.curIndex = index;
			this.$refs.mixModal.open();
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
.list-item {
	width: 690rpx;
	height: 240rpx;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 4rpx 18rpx 0px rgba(0, 0, 0, 0.1);
	border-radius: 6rpx;
	margin: 0 auto;
	margin-bottom: 30rpx;
	padding: 30rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.card-image {
		display: flex;
		align-items: center;
		image {
			height: 40rpx;
			width: 40rpx;
			margin-right: 20rpx;
		}
	}
	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		image {
			height: 32rpx;
			width: 32rpx;
		}
	}
}
.app {
	padding-top: 20rpx;
}
.main-wrap {
	opacity: 0;
	transition: opacity 0.2s;

	&.show {
		opacity: 1;
	}
}
.bot-btn-wrap {
	position: fixed;
	left: 0;
	bottom: 30rpx;
	z-index: 90;
	width: 100%;
}
</style>
