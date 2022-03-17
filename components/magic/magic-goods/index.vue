<template>
	<div class="magic-goods" :style="{ background: background, padding: padding }">
		<OneCol v-if="layout === 0" :component-data="componentData"></OneCol>
		<TwoCol v-if="layout === 1" :component-data="componentData"></TwoCol>
		<ThreeCol v-if="layout === 2" :component-data="componentData"></ThreeCol>
		<SingleRow v-if="layout === 3" :component-data="componentData"></SingleRow>
	</div>
</template>
<script>
import OneCol from './components/OneCol.vue';
import TwoCol from './components/TwoCol.vue';
import ThreeCol from './components/ThreeCol.vue';
import SingleRow from './components/SingleRow.vue';
export default {
	name: 'magic_goods',
	props: {
		componentData: {
			type: Object,
			default: () => ({})
		}
	},
	components: {
		OneCol,
		TwoCol,
		ThreeCol,
		SingleRow
	},
	computed: {
		background() {
			let value;
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				value = data.background;
			}
			return value;
		},
		padding() {
			let value;
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				value = this.$util.px2rpx(data.padding);
				return value + 'rpx';
			}
			return value;
		},
		layout() {
			let value = 0;
			// let layoutMap = {
			// 	0: 'OneCol',
			// 	1: 'TwoCol',
			// 	2: 'ThreeCol',
			// 	3: 'SingleRow'
			// };
			if (this.componentData && this.componentData.data) {
				const data = this.componentData.data;
				value = data.layout;
			}
			return value;
		}
	}
};
// import { Vue, Component, Prop } from 'vue-property-decorator'
// import OneCol from './components/OneCol.vue'
// import TwoCol from './components/TwoCol.vue'
// import ThreeCol from './components/ThreeCol.vue'
// import SingleRow from './components/SingleRow.vue'
// import { IMagicGoodsComponent } from '@/store/magic/magic-goods'

// @Component({
//   name: 'magic_goods',
//   components: {
//     OneCol,
//     TwoCol,
//     ThreeCol,
//     SingleRow
//   }
// })
// export default class extends Vue {
//   @Prop({ type: Object, required: true }) componentData!: IMagicGoodsComponent
//   private layoutMap = {
//     0: 'OneCol',
//     1: 'TwoCol',
//     2: 'ThreeCol',
//     3: 'SingleRow'
//   }

//   get layout() {
//     return this.layoutMap[this.componentData.data.layout]
//   }

//   get style() {
//     const data = this.componentData.data
//     const style = {
//       background: data.background,
//       padding: data.padding + 'px'
//     }
//     return style
//   }
// }
</script>
<style scoped lang="scss"></style>
