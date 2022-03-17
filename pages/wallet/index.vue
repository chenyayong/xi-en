<template>
	<view class="app">
		<view class="card column">
			<text class="tip">钱包余额</text>
			<text class="price">{{ userInfo.user_money | price(2) }}</text>
		</view>

		<!-- <view v-if="!openExamine" class="cell row b-b" @click="navTo('recLog')">
			<text class="mix-icon icon-qianbao"></text>
			<text class="tit ">转账</text>
			<text class="mix-icon icon-you"></text>
		</view> -->

		<view class="cell row b-b" @click="navTo('withdraw')">
			<text class="mix-icon icon-tixian"></text>
			<text class="tit ">提现</text>
			<text class="mix-icon icon-you"></text>
		</view>
		<view class="cell row" @click="navTo('moneyLog')">
			<text class="mix-icon icon-wodezhanghu_zijinjilu"></text>
			<text class="tit ">提现记录</text>
			<text class="mix-icon icon-you"></text>
		</view>

		<view class="list">
			<uni-segmented-control
				:current="current"
				:values="items"
				@clickItem="onClickItem"
				styleType="text"
				activeColor="rgb(255, 83, 111)"
			></uni-segmented-control>
			<view class="content">
				<uni-list v-if="list && list.length">
					<uni-list-item v-for="(item, index) in list" :key="index" :title="item.desc" :note="item.change_time" :rightText="item.user_money" />
				</uni-list>
				<mix-empty v-else></mix-empty>
			</view>
		</view>
		<!-- <view class="tabs">
			<view class="tabs-header row">
				<view
					class="tabs-item fill"
					@click="changeTabs(index)"
					:class="{ current: tabsDataIndex === index }"
					v-for="(item, index) in tabsData"
					:key="index"
				>
					{{ item.name }}
				</view>
			</view>
			<view class="tabs-content"></view>
		</view> -->
	</view>
</template>

<script>
import { mapState } from 'vuex';
// import { getWithdrawals } from '@/api/wallet.js';
import { getAccountList } from '@/api/user.js';
export default {
	data() {
		// const list = [
		// 	{
		// 		desc: 'hello',
		// 		change_time: '2021-12-12 12:12',
		// 		user_money: '123'
		// 	},
		// 	{
		// 		desc: 'hello',
		// 		change_time: '2021-12-12 12:12',
		// 		user_money: '123'
		// 	},
		// 	{
		// 		desc: 'hello',
		// 		change_time: '2021-12-12 12:12',
		// 		user_money: '123'
		// 	}
		// ]
		return {
			current: 0,
			items: ['全部', '收入', '支出'],
			count: 0,
			params: {
				type: 1,
				limit: 10,
				offset: 0
			},
			list: [] // desc   描述  change_time 时间   user_money
		};
	},
	computed: {
		...mapState(['openExamine', 'userInfo'])
	},
	onLoad() {
		this.loadData();
	},
	methods: {
		async loadData(type) {
			this.isLoading = true;
			const res = await getAccountList(this.params);
			if (res.status === 1) {
				this.count = res.result.count;
				if (type === 'add') {
					const list = res.result.account_log;
					this.list = this.list.concat(list || []);
				} else {
					this.list = res.result.account_log;
				}
			} else {
				this.$util.msg(res.msg);
			}
			this.isLoading = false;
		},
		onClickItem(obj) {
			this.current = obj.currentIndex;
			this.params.offset = 0;
			this.params.type = this.current + 1;
			this.loadData();
		}
	}
};
</script>

<style scoped lang="scss">
.app {
	display: flex;
	flex-direction: column;
	// align-items: center;
	padding-top: 10rpx;
	/deep/ .mix-empty {
		position: relative;
	}
	/deep/ .default {
		padding-top: 0;
	}
}
.tabs {
	margin-top: 30rpx;
	.tabs-header {
		.tabs-item {
			text-align: center;
			color: #333;
			font-size: 32rpx;
			position: relative;
			padding: 20rpx 0;
			&.current {
				color: rgb(255, 83, 111);
			}
			&.current::before {
				content: '';
				position: absolute;
				height: 1px;
				width: 30%;
				bottom: 0;
				background-color: rgb(255, 83, 111);
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
	.tabs-content {
		color: #333;
		font-size: 26rpx;
		padding: 20rpx;
	}
}

.card {
	width: 680rpx;
	height: 280rpx;
	padding: 40rpx 30rpx;
	// margin-bottom: 16rpx;
	margin: auto;
	background-image: url(~@/static/bg/wallet.png);
	background-size: 100% 100%;
	color: #fff;

	.tip {
		font-size: 28rpx;
		line-height: 40rpx;
	}
	.price {
		margin-top: 8rpx;
		font-size: 72rpx;
		line-height: 92rpx;
	}
}
.cell {
	width: 100%;
	height: 120rpx;
	padding: 0 40rpx 0 44rpx;

	&:after {
		left: 40rpx;
		right: 40rpx;
		border-color: #e8e8e8;
	}
	.tit {
		flex: 1;
		font-size: 30rpx;
		color: #333;
	}
	.mix-icon {
		width: 64rpx;
		font-size: 40rpx;
	}
	.icon-qianbao {
		color: #3ed098;
	}
	.icon-tixian {
		color: #fe7c7a;
	}
	.icon-wodezhanghu_zijinjilu {
		font-size: 42rpx;
		color: #fbbe59;
	}
	.icon-you {
		width: auto;
		font-size: 24rpx;
		color: #999;
	}
}
</style>
