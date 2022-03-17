<template>
	<div class="magic-guideline" :style="{ background: background, padding: padding }">
		<div class="border" :style="{ borderTopWidth: borderTopWidth, borderTopStyle: borderTopStyle, borderTopColor: borderTopColor }"></div>
	</div>
</template>
<script>
export default {
	name: 'MagicGuideline',
	props: {
		componentData: {
			type: Object,
			default: () => {}
		}
	},
	computed: {
		background() {
			let background;
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				background = data.background;
			}
			return background;
		},
		padding() {
			let padding;
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				const paddingTopAndBottom = this.$util.px2rpx(data.paddingTopAndBottom);
				const paddingLeftAndRight = this.$util.px2rpx(data.paddingLeftAndRight);
				padding = `${paddingTopAndBottom}rpx ${paddingLeftAndRight}rpx`;
			}
			return padding;
		},
		borderTopWidth() {
			let value;
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				value = this.$util.px2rpx(data.border_width) + 'rpx';
			}
			return value;
		},
		borderTopStyle() {
			let value;
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				value = data.border_style;
			}
			return value;
		},
		borderTopColor() {
			let value;
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				value = data.border_color;
			}
			return value;
		}
	}
};
</script>
<style scoped lang="scss"></style>
