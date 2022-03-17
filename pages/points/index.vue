<template>
	<view class="app">
		<uni-segmented-control
			:current="current"
			:values="items"
			@clickItem="onClickItem"
			styleType="text"
			activeColor="rgb(255, 83, 111)"
		></uni-segmented-control>
		<view class="content">
			<uni-list v-if="list && list.length">
				<uni-list-item v-for="(item, index) in list" :key="index" :title="item.desc" :note="item.change_time" :rightText="item.pay_points" />
			</uni-list>
			<mix-empty v-else></mix-empty>
		</view>
	</view>
</template>

<script>
import { getPointsList } from '@/api/user.js';
export default {
	data() {
		return {
			current: 0,
			items: ['全部', '收入', '支出'],
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
			const res = await getPointsList(this.params);
			if (res.status === 1) {
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
	/deep/ .uni-list-item__content-title {
		font-size: 32rpx;
		margin-bottom: 4rpx;
	}
	/deep/ .uni-list-item__content-note {
		font-size: 28rpx;
	}
	/deep/ .uni-list-item__extra-text {
		font-size: 28rpx;
	}
}
</style>
