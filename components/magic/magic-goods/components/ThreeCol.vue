<template>
	<div class="three-col">
		<div class="row">
			<div class="col fill">
				<ColSub
					:custom-style="{ borderRadius: borderRadius }"
					v-for="(item, index) in leftItems"
					:item="item"
					:attribute="attribute"
					:content="componentData.data.content"
					:key="index"
				/>
			</div>
			<div class="col fill">
				<ColSub
					:custom-style="{ borderRadius: borderRadius }"
					v-for="(item, index) in centerItems"
					:item="item"
					:attribute="attribute"
					:content="componentData.data.content"
					:key="index"
				/>
			</div>
			<div class="col fill">
				<ColSub
					:custom-style="{ borderRadius: borderRadius }"
					v-for="(item, index) in rightItems"
					:item="item"
					:attribute="attribute"
					:content="componentData.data.content"
					:key="index"
				/>
			</div>
		</div>
		<!-- <van-row class="row">
			<van-col class="col" :span="8">
				<el-skeleton style="width: 100%;" :loading="loading">
					<template slot="template">
						<el-skeleton-item variant="image" style="width: 100%; height: 120px;" />
						<div style="padding: 14px;">
							<el-skeleton-item variant="p" style="width: 50%" />
							<div style="display: flex; align-items: center; justify-items: space-between;">
								<el-skeleton-item variant="text" style="margin-right: 16px;" />
								<el-skeleton-item variant="text" style="width: 50%;" />
							</div>
						</div>
					</template>
					<ColSub
						:style="colStyle"
						v-for="(item, index) in leftItems"
						:item="item"
						:attribute="attribute"
						:content="componentData.data.content"
						:key="index"
					/>
				</el-skeleton>
			</van-col>
			<van-col class="col" :span="8">
				<el-skeleton style="width: 100%;" :loading="loading">
					<template slot="template">
						<el-skeleton-item variant="image" style="width: 100%; height: 120px;" />
						<div style="padding: 14px;">
							<el-skeleton-item variant="p" style="width: 50%" />
							<div style="display: flex; align-items: center; justify-items: space-between;">
								<el-skeleton-item variant="text" style="margin-right: 16px;" />
								<el-skeleton-item variant="text" style="width: 50%;" />
							</div>
						</div>
					</template>
					<ColSub
						:style="colStyle"
						v-for="(item, index) in centerItems"
						:item="item"
						:attribute="attribute"
						:content="componentData.data.content"
						:key="index"
					/>
				</el-skeleton>
			</van-col>
			<van-col class="col" :span="8">
				<el-skeleton style="width: 100%;" :loading="loading">
					<template slot="template">
						<el-skeleton-item variant="image" style="width: 100%; height: 120px;" />
						<div style="padding: 14px;">
							<el-skeleton-item variant="p" style="width: 50%" />
							<div style="display: flex; align-items: center; justify-items: space-between;">
								<el-skeleton-item variant="text" style="margin-right: 16px;" />
								<el-skeleton-item variant="text" style="width: 50%;" />
							</div>
						</div>
					</template>
					<ColSub
						:style="colStyle"
						v-for="(item, index) in rightItems"
						:item="item"
						:attribute="attribute"
						:content="componentData.data.content"
						:key="index"
					/>
				</el-skeleton>
			</van-col>
		</van-row> -->
	</div>
</template>
<script>
import ColSub from './ColSub.vue';
export default {
	name: 'ThreeCol',
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
	components: {
		ColSub
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
		},
		leftItems() {
			const length = this.componentData.data.items.length;
			const items = [];
			for (let i = 0; i < length; i += 3) {
				const temp = this.componentData.data.items[i];
				items.push(temp);
			}
			return items;
		},
		centerItems() {
			const length = this.componentData.data.items.length;
			const items = [];
			for (let i = 1; i < length; i += 3) {
				const temp = this.componentData.data.items[i];
				items.push(temp);
			}
			return items;
		},
		rightItems() {
			const length = this.componentData.data.items.length;
			const items = [];
			for (let i = 2; i < length; i += 3) {
				const temp = this.componentData.data.items[i];
				items.push(temp);
			}
			return items;
		}
	}
};
// import { Vue, Component, Prop } from 'vue-property-decorator';
// import ColSub from './ColSub.vue';
// import { IMagicGoodsComponent } from '@/store/magic/magic-goods';
// @Component({
// 	name: 'threeCol',
// 	components: {
// 		ColSub
// 	}
// })
// export default class extends Vue {
// 	@Prop({ type: Object, required: true }) componentData!: IMagicGoodsComponent;

// 	get loading() {
// 		const length = this.componentData.data.items.length;
// 		return !length;
// 	}

// 	get colStyle() {
// 		const style = {
// 			borderRadius: this.componentData.data.border_radius + 'px'
// 		};
// 		return style;
// 	}

// 	private attributeMap: { [key: string]: any } = {
// 		0: '',
// 		1: 'tuijian',
// 		2: 'rexiao',
// 		3: 'xinpin',
// 		4: 'baoyou',
// 		5: 'xsqg'
// 	};

// 	get attribute() {
// 		return this.attributeMap[this.componentData.data.attribute];
// 	}

// 	get leftItems() {
// 		const length = this.componentData.data.items.length;
// 		const items = [];
// 		for (let i = 0; i < length; i += 3) {
// 			const temp = this.componentData.data.items[i];
// 			items.push(temp);
// 		}
// 		return items;
// 	}

// 	get centerItems() {
// 		const length = this.componentData.data.items.length;
// 		const items = [];
// 		for (let i = 1; i < length; i += 3) {
// 			const temp = this.componentData.data.items[i];
// 			items.push(temp);
// 		}
// 		return items;
// 	}

// 	get rightItems() {
// 		const length = this.componentData.data.items.length;
// 		const items = [];
// 		for (let i = 2; i < length; i += 3) {
// 			const temp = this.componentData.data.items[i];
// 			items.push(temp);
// 		}
// 		return items;
// 	}
// }
</script>

<style lang="scss" scoped>
.row {
	align-items: flex-start;
}
// .col {
// 	&:nth-child(2n - 1) {
// 		padding-right: 5.3px;
// 	}
// 	&:nth-child(2n) {
// 		padding-left: 2.7px;
// 		padding-right: 2.7px;
// 	}

// 	&:nth-child(3n) {
// 		padding-left: 5.3px;
// 		padding-right: 0;
// 	}
// }
.col {
	&:nth-child(even) {
		padding-left: 2.7px;
		padding-right: 2.7px;
	}
	&:nth-child(odd) {
		padding-right: 5.3px;
	}
	&:nth-child(3n) {
		padding-left: 5.3px;
		padding-right: 0;
	}
}
</style>
