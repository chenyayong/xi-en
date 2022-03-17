<template>
	<view class="teams app">
		<view class="card column">
			<text class="tip">直推客户数</text>
			<text class="price">{{ count }}</text>
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
					<uni-list-item
						v-for="(item, index) in list"
						:key="index"
						:title="item.nickname"
						:note="item.reg_time"
						:thumb="item.head_pic"
						thumb-size="lg"
						:rightText="item.level_name"
					/>
				</uni-list>
				<mix-empty v-else></mix-empty>
			</view>
		</view>
	</view>
</template>

<script>
import { getGroupList } from '@/api/user.js';
export default {
	data() {
		return {
			current: 0,
			items: ['直推客户数', '团队明细'],
			count: 0,
			params: {
				type: 1,
				limit: 10,
				offset: 0
			},
			list: []
		};
	},
	onLoad() {
		this.loadData();
	},
	async onReachBottom() {
		if (!this.isLoading) {
			this.params.offset++;
			await this.loadData('add');
		}
	},
	methods: {
		async loadData(type) {
			this.isLoading = true;
			const res = await getGroupList(this.params);
			if (res.status === 1) {
				this.count = res.result.count;
				if (type === 'add') {
					const list = res.result.group_lis;
					this.list = this.list.concat(list || []);
				} else {
					this.list = res.result.group_list;
				}
			} else {
				this.$util.msg(res.msg);
			}
			this.isLoading = false;
		},
		onClickItem(obj) {
			// console.log(current)
			this.current = obj.currentIndex;
			this.params.offset = 0;
			this.params.type = this.current + 1;
			this.loadData();
		}
	}
};
</script>

<style lang="scss">
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
.list {
	padding: 20rpx;
}
</style>
