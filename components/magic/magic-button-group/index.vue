<template>
	<div class="magic-button-group" :style="{ paddingTop: paddingTop, paddingBottom: paddingBottom, background: background }">
		<swiper
			:style="{ height: swiperHeight }"
			v-if="componentData && componentData.data && componentData.data.swiper"
			class="swiper"
			circular
			autoplay
			:indicator-dots="true"
			interval="5000"
		>
			<swiper-item v-for="(item, index) in swiperSlides" :key="index">
				<uni-grid :showBorder="false" :square="false" :column="componentData.data.row_button_count">
					<uni-grid-item class="uni-grid-item" v-for="(e, i) in item" :index="i" :key="i">
						<view class="grid-item-box">
							<image :src="e.img_url" :style="{ width: imgSize, height: imgSize, borderRadius: imgRound }" class="image" mode="aspectFill" />
							<text class="text" :style="{ color: textColor, fontSize: textSize }">{{ e.img_label }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</swiper-item>
		</swiper>
		<uni-grid v-else-if="componentData && componentData.data" :showBorder="false" :square="false" :column="componentData.data.row_button_count">
			<uni-grid-item class="uni-grid-item" v-for="(item, index) in componentData.data.items" :index="index" :key="index">
				<view class="grid-item-box">
					<image :src="item.img_url" :style="{ width: imgSize, height: imgSize, borderRadius: imgRound }" class="image" mode="aspectFill" />
					<text class="text" :style="{ color: textColor, fontSize: textSize }">{{ item.img_label }}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</div>
</template>
<script>
// import MagicGrid from './components/MagicGrid.vue';
export default {
	name: 'MagicButtonGroup',
	props: {
		componentData: {
			type: Object,
			default: () => {}
		}
	},
	computed: {
		paddingTop() {
			let value;
			if (this.componentData && this.componentData.data) {
				const paddingTop = this.$util.px2rpx(this.componentData.data.padding_top);
				value = paddingTop + 'rpx';
			}
			return value;
		},
		paddingBottom() {
			let value;
			if (this.componentData && this.componentData.data) {
				const paddingBottom = this.$util.px2rpx(this.componentData.data.padding_bottom);
				value = paddingBottom + 'rpx';
			}
			return value;
		},
		background() {
			let value;
			if (this.componentData && this.componentData.data) {
				value = this.componentData.data.background;
			}
			return value;
		},
		swiperSlides() {
			let result = [];
			if (this.componentData && this.componentData.data) {
				const items = this.componentData.data.items;
				const length = items.length;
				const rowSwiper = this.componentData.data.row_swiper;
				const rowButtonCount = this.componentData.data.row_button_count;
				const swiperCount = rowSwiper * rowButtonCount;
				let page = 1;
				if (this.componentData.data.swiper) {
					page = Math.ceil(length / swiperCount);
					console.log(page, length, swiperCount);
					for (let i = 0; i < page; i++) {
						const start = i * swiperCount;
						const end = (i + 1) * swiperCount;
						const temp = items.slice(start, end);
						result.push(temp);
					}
				} else {
					result = [items];
				}
				console.log('swiperSlides', result);
			}
			return result;
		},
		imgSize() {
			let value;
			if (this.componentData && this.componentData.data) {
				value = this.$util.px2rpx(this.componentData.data.button_size) + 'rpx';
			}
			return value;
		},
		imgRound() {
			let value;
			if (this.componentData && this.componentData.data) {
				value = this.$util.px2rpx(this.componentData.data.button_round) + 'rpx';
			}
			return value;
		},
		textColor() {
			let value;
			if (this.componentData && this.componentData.data) {
				value = this.componentData.data.text_color;
			}
			return value;
		},
		textSize() {
			let value;
			if (this.componentData && this.componentData.data) {
				value = this.$util.px2rpx(this.componentData.data.text_size) + 'rpx';
			}
			return value;
		},
		swiperHeight() {
			let value;
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				const paddingTop = data.padding_top;
				const paddingBottom = data.padding_bottom;
				const imgSize = data.button_size;
				const textSize = data.text_size;
				const count = Math.ceil(this.swiperSlides[0].length / data.row_button_count);
				value = (paddingTop + paddingBottom + imgSize + textSize + 10) * count;
				value = this.$util.px2rpx(value) + 'rpx';
			}
			return value;
		}
	}
};
</script>
<style scoped lang="scss">
.uni-grid-item {
	margin-bottom: 20rpx;
}
.grid-item-box {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 24rpx;
	.text {
		margin-top: 10rpx;
	}
	image {
		width: 100%;
		height: 100%;
		display: block;
		overflow: hidden;
		flex-shrink: 0;
	}
}
</style>
