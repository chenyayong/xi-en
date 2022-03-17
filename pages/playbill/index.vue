<template>
	<view class="playbill"><image :src="domain + code_path" mode="widthFix"></image></view>
</template>

<script>
import { getAppletCode, getWeChatCode } from '@/api/user.js';
export default {
	data() {
		return {
			domain: this.$config.domain,
			code_path: ''
		};
	},
	async onLoad() {
		// 微信二维码
		// #ifdef H5
		const res = await getWeChatCode();
		if (res.status === 1) {
			this.code_path = res.result.code_path;
		}else{
			this.$util.msg(res.msg)
		}
		// #endif

		// #ifdef MP-WEIXIN
		const res = await getAppletCode();
		if (res.status === 1) {
			this.code_path = res.result.code_path;
		}else{
			this.$util.msg(res.msg)
		}
		// #endif
	}
};
</script>
<style lang="scss">
	.playbill{
		width: 100%;
		height: calc(100vh - 44px);
		background-image: linear-gradient(300deg, #eef3d2, #fc8884);
		position: relative;
		image{
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			// border: 1px red solid;
			display: block;
		}
	}
</style>
