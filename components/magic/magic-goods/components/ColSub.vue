<template>
	<!--  eslint-disable vue/no-use-v-if-with-v-for -->
	<div class="col-sub" :style="{ borderRadius: customStyle.borderRadius }" @click="handleNav(item)">
		<div class="block-img">
			<image class="original_img" :src="item.original_img" alt="" srcset="" mode="widthFix" />
			<image class="attribute" v-if="attribute" :src="attribute" />
			<!-- <svg-icon v-if="attribute" :name="attribute" width="30" height="30" color="#F56C6C"></svg-icon> -->
		</div>
		<div class="label" :class="[key]" v-for="(value, key) in contentMap" v-if="contentFilter(key)" :key="key">{{ value }} {{ item[key] }}</div>
	</div>
</template>
<script>
export default {
	name: 'TwoColSub',
	data() {
		return {
			contentMap: {
				goods_name: '',
				sales_sum: '销量',
				shop_price: '￥',
				cost_price: '￥'
			}
		};
	},
	props: {
		customStyle: {
			type: Object,
			default: () => ({})
		},
		item: {
			type: Object,
			default: () => ({})
		},
		attribute: {
			type: String,
			default: ''
		},
		content: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		contentFilter(key) {
			return this.content.indexOf(key) > -1;
		},
		handleNav(item) {
			this.navTo(`/pages/product/detail?id=${item.goods_id}`, { login: true });
		}
	}
};
// import { Vue, Component, Prop } from 'vue-property-decorator'
// import { IMagicGoodsItem } from '@/store/magic/magic-goods'
// @Component({
//   name: 'TwoColSub'
// })
// export default class extends Vue {
//   // @Prop({ type: Object, required: true }) componentData!: IMagicGoodsComponent
//   @Prop({ type: Object, required: true }) item!: IMagicGoodsItem
//   @Prop({ type: String, required: true }) attribute!: string
//   @Prop({ type: Array, required: true }) content!: string[]
//   private contentMap = {
//     goods_name: '',
//     sales_sum: '销量',
//     shop_price: '￥',
//     cost_price: '￥'
//   }

//   contentFilter(key: string) {
//     return this.content.indexOf(key) > -1
//   }
// }
</script>

<style lang="scss" scoped>
.col-sub ::v-deep .svg-icon {
	position: absolute;
	left: 6px;
	top: 6px;
}
.col-sub {
	position: relative;
	background-color: #fff;
	margin-bottom: 16rpx;
	padding-bottom: 16rpx;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12);
	.block-img {
		// margin-top: 8px;
		// img {
		// 	width: 100%;
		// 	display: block;
		// 	height: calc(100% / 2 - 4px);
		// 	object-fit: contain;
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
	}
	.label {
		// margin-top: 8px;
		font-size: 24rpx;
		padding-left: 12rpx;
		color: #909399;
	}
	.goods_name {
		color: #303133;
		font-weight: bold;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-top: 12rpx;
	}
	.sales_sum {
		margin-top: 24rpx;
	}
	.shop_price {
		color: #f56c6c;
		margin-top: 24px;
		font-size: 32rpx;
	}
	.cost_price {
		text-decoration: line-through;
		margin-top: 4rpx;
	}
}
</style>
