<template>
	<!--  eslint-disable vue/no-use-v-if-with-v-for -->
	<div class="signle-row">
		<view class="block row" @click="handleNav(item)" :style="{ borderRadius: borderRadius }" v-for="(item, index) in componentData.data.items" :key="index">
			<view class="block-img">
				<image class="original_img" :src="item.original_img" alt="" srcset="" mode="aspectFit" />
				<image class="attribute" v-if="attribute" :src="attribute" />
				<!-- <svg-icon v-if="attribute" :name="attribute" width="30" height="30" color="#F56C6C"></svg-icon> -->
			</view>
			<view class="block-descript fill">
				<view class="label" :class="[key]" v-for="(value, key) in contentMap" v-if="contentFilter(key)" :key="key">{{ value }} {{ item[key] }}</view>
			</view>
		</view>
		<!-- <el-skeleton style="width: 100%;" :loading="loading">
			<template slot="template">
				<div style="display: flex; align-items: stretch;">
					<div><el-skeleton-item variant="image" style="width: 120px; height: 120px;" /></div>
					<div style="width: 100%;display: flex;flex-direction: column;justify-content: space-around;margin-left:20px;">
						<el-skeleton-item variant="p" style="width: 70%;" />
						<el-skeleton-item variant="p" style="width: 50%;" />
						<el-skeleton-item variant="p" style="width: 30%;" />
						<el-skeleton-item variant="p" style="width: 30%;" />
					</div>
				</div>
			</template>
			<van-row class="row" type="flex" :style="colStyle" v-for="(item, index) in componentData.data.items" :key="index">
				<van-col class="block-img">
					<img :src="item.original_img" alt="" srcset="" />
					<svg-icon v-if="attribute" :name="attribute" width="30" height="30" color="#F56C6C"></svg-icon>
				</van-col>
				<van-col>
					<van-row class="label" :class="[key]" v-for="(value, key) in contentMap" v-if="contentFilter(key)" :key="key">
						{{ value }} {{ item[key] }}
					</van-row>
				</van-col>
			</van-row>
		</el-skeleton> -->
	</div>
</template>
<script>
export default {
	name: 'SignleRow',
	props: {
		componentData: {
			type: Object,
			default: () => {
				return {
					data: {}
				};
			}
		}
	},
	data() {
		return {
			attributeMap: {
				0: '',
				1: 'tuijian',
				2: 'rexiao',
				3: 'xinpin',
				4: 'baoyou',
				5: 'xsqg'
			},
			contentMap: {
				goods_name: '',
				sales_sum: '销量',
				shop_price: '￥',
				cost_price: '￥'
			}
		};
	},
	computed: {
		borderRadius() {
			let value;
			if (this.componentData && this.componentData.data) {
				value = this.componentData.data.border_radius;
				value = this.$util.px2rpx(value);
			}
			return value + 'rpx';
		},
		attribute() {
			const attribute = this.componentData.data.attribute;
			const value = this.attributeMap[attribute];
			if (value) {
				return `/static/magic/goods/${this.attributeMap[attribute]}.png`;
			} else {
				return value;
			}
		}
	},
	methods: {
		contentFilter(key) {
			return this.componentData.data.content.indexOf(key) > -1;
		},
		handleNav(item) {
			this.navTo(`/pages/product/detail?id=${item.goods_id}`, { login: true });
		}
	}
};
// import { Vue, Component, Prop } from 'vue-property-decorator';
// import { IMagicGoodsComponent, IContent } from '@/store/magic/magic-goods';
// @Component({
// 	name: 'signleRow'
// })
// export default class extends Vue {
// 	@Prop({ type: Object, required: true }) componentData!: IMagicGoodsComponent;

// 	private attributeMap: { [key: string]: any } = {
// 		0: '',
// 		1: 'tuijian',
// 		2: 'rexiao',
// 		3: 'xinpin',
// 		4: 'baoyou',
// 		5: 'xsqg'
// 	};

// 	private contentMap = {
// 		goods_name: '',
// 		sales_sum: '销量',
// 		shop_price: '￥',
// 		cost_price: '￥'
// 	};

// 	contentFilter(key: IContent) {
// 		return this.componentData.data.content.indexOf(key) > -1;
// 	}

// 	get loading() {
// 		const length = this.componentData.data.items.length;
// 		return !length;
// 	}

// 	get attribute() {
// 		return this.attributeMap[this.componentData.data.attribute];
// 	}

// 	get colStyle() {
// 		const style = {
// 			borderRadius: this.componentData.data.border_radius + 'px'
// 		};
// 		return style;
// 	}
// }
</script>

<style lang="scss" scoped>
// .signle-row ::v-deep .svg-icon {
// 	position: absolute;
// 	left: 6px;
// 	top: 6px;
// }
.signle-row .block:last-child {
	margin-bottom: 0;
}
.signle-row {
	.block {
		position: relative;
		background-color: #fff;
		margin-bottom: 16rpx;
		padding: 16rpx;
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12);
		align-items: stretch;
		.block-img {
			width: 250rpx;
			height: 250rpx;
			margin-right: 40rpx;
			position: relative;
			image {
				display: block;
				width: 100%;
			}
			.attribute {
				position: absolute;
				left: 12rpx;
				top: 12rpx;
				width: 60rpx;
				height: 60rpx;
			}
			.original_img {
				width: 250rpx;
				height: 250rpx;
			}
		}
		.block-descript {
			position: relative;
		}
		.label {
			font-size: 24rpx;
			color: #909399;
		}
		.goods_name {
			position: absolute;
			top: 16rpx;
			color: #303133;
			font-weight: bold;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.sales_sum {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		// .price {
		// 	position: absolute;
		// 	bottom: 32rpx;
		// }
		.shop_price {
			color: #f56c6c;
			position: absolute;
			bottom: 48rpx;
			font-size: 32rpx;
		}
		.cost_price {
			position: absolute;
			bottom: 16rpx;
			text-decoration: line-through;
		}
	}
}
</style>
