<template>
	<view class="magic-swiper" :style="{ padding: padding }">
		<swiper class="swiper" v-if="componentData && componentData.data" circular autoplay :indicator-dots="true" interval="5000" @change="onSwiperChange">
			<swiper-item @click="navTo(item.img_link, { login: true })" class="item" v-for="(item, index) in componentData.data.items" :key="index">
				<image class="pic" :class="{ current: current === index }" :src="item.img_url" mode="scaleToFill"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	name: 'MagicSwiper',
	data() {
		return {
			current: 0
			// list: [
			// 	{ image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2221182985,1875035766&fm=26&gp=0.jpg' },
			// 	{ image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2544696267,4055569904&fm=26&gp=0.jpg' },
			// 	{ image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2573133749,533767849&fm=26&gp=0.jpg' }
			// ]
		};
	},
	props: {
		componentData: {
			type: Object,
			default: () => {}
		}
	},
	computed: {
		padding() {
			let value;
			if (this.componentData && this.componentData.data) {
				const padding = this.$util.px2rpx(this.componentData.data.padding);
				value = padding + 'rpx';
			}
			return value;
		}
	},
	methods: {
		onSwiperChange(e) {
			this.current = e.detail.current;
		}
	}
};
</script>

<style scoped lang="scss">
.magic-swiper {
	position: relative;
	width: 100%;
}
.swiper {
	width: 100%;
	height: 310rpx;
}
.pic {
	display: block;
	width: 100%;
	height: 100%;
	// border-radius: 16rpx;
	// transform: scale(0.94, 0.88);
	// transition: transform 0.36s;

	// &.current {
	// 	transform: scale(1);
	// }
}
.dots {
	position: absolute;
	left: 0;
	bottom: 12rpx;
	width: 100%;
}
.dot {
	width: 32rpx;
	height: 8rpx;
	margin: 0 6rpx;
	background-color: #fff;
	border-radius: 10px;

	&.current {
		background-color: $base-color;
	}
}
</style>
