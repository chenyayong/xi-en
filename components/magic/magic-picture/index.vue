<template>
	<div class="magic-picture" :style="{ padding: padding }">
		<div class="picture" v-if="componentData && componentData.data" v-for="(item, index) in componentData.data.items" :key="index">
			<image mode="widthFix" :src="item.img_url" @click="navTo(item.img_link, { login: true })" />
		</div>
	</div>
</template>
<script>
export default {
	name: 'MagicPicture',
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
	}
};
</script>
<style scoped lang="scss">
.picture {
	width: 100%;
	image {
		width: 100%;
		display: block;
	}
}
</style>
