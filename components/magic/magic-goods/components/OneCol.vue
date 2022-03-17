<template>
	<!--  eslint-disable vue/no-use-v-if-with-v-for -->
	<div class="one-col">
		<view class="block" @click="handleNav(item)" :style="{ borderRadius: borderRadius }" v-for="(item, index) in componentData.data.items" :key="index">
			<div class="block-img">
				<image :src="item.original_img" alt="" srcset="" mode="widthFix" />
				<image class="attribute" v-if="attribute" :src="attribute" />
				<!-- <svg-icon v-if="attribute" :name="attribute" width="30" height="30" color="#F56C6C"></svg-icon> -->
				<div class="block-img-descript">
					<view class="label" :class="[key]" v-for="(value, key) in contentMap" v-if="contentFilter(key)" :key="key">{{ value }}{{ item[key] }}</view>
				</div>
			</div>
		</view>
		<!-- <el-skeleton style="width: 100%;" :loading="loading">
			<template slot="template">
				<el-skeleton-item variant="image" style="width: 100%; height: 150px;" />
				<div style="padding: 14px;">
					<el-skeleton-item variant="p" style="width: 50%" />
					<div style="display: flex; align-items: center; justify-items: space-between;">
						<el-skeleton-item variant="text" style="margin-right: 16px;" />
						<el-skeleton-item variant="text" style="width: 30%;" />
					</div>
				</div>
			</template>
			<van-row class="row" :style="colStyle" v-for="(item, index) in componentData.data.items" :key="index">
				<div class="block-img">
					<img :src="item.original_img" alt="" srcset="" />
					<svg-icon v-if="attribute" :name="attribute" width="30" height="30" color="#F56C6C"></svg-icon>
					<div class="block-img-descript">
						<van-row class="label" :class="[key]" v-for="(value, key) in contentMap" v-if="contentFilter(key)" :key="key">
							{{ value }}{{ item[key] }}
						</van-row>
					</div>
				</div>
			</van-row>
		</el-skeleton> -->
	</div>
</template>
<script>
export default {
	name: 'oneCol',
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
		handleNav(item) {
			this.navTo(`/pages/product/detail?id=${item.goods_id}`, { login: true });
		},
		contentFilter(key) {
			return this.componentData.data.content.indexOf(key) > -1;
		}
	}
};
// import { Vue, Component, Prop } from 'vue-property-decorator';
// import { IMagicGoodsComponent, IContent } from '@/store/magic/magic-goods';
// @Component({
// 	name: 'oneCol'
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
// .one-col ::v-deep .svg-icon {
// 	position: absolute;
// 	left: 6px;
// 	top: 6px;
// }
.one-col {
	.block {
		position: relative;
		background-color: #fff;
		margin-bottom: 16rpx;
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12);
		margin-bottom: 20rpx;
		.block-img {
			width: 100%;
			position: relative;
			// img {
			// 	width: 100%;
			// 	height: 100%;
			// 	display: block;
			// }
			image {
				width: 100%;
				display: block;
			}
			.attribute {
				position: absolute;
				left: 12rpx;
				top: 12rpx;
				width: 60rpx;
				height: 60rpx;
			}
			.block-img-descript {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.4);
				padding-bottom: 20rpx;
			}
		}
		.label {
			font-size: 24rpx;
			padding-left: 20rpx;
			color: #fff;
		}
		.goods_name {
			font-weight: bold;
			font-size: 28rpx;
			padding-top: 20rpx;
			// padding-bottom: 20rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.shop_price {
			margin-top: 20rpx;
			color: #f56c6c;
			font-size: 36rpx;
		}
		.cost_price {
			// margin-bottom: 20rpx;
			text-decoration: line-through;
		}
		.sales_sum {
			margin-top: 20rpx;
		}
	}
}
</style>
