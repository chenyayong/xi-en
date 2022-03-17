<template>
	<div class="two-col">
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
					v-for="(item, index) in rightItems"
					:item="item"
					:attribute="attribute"
					:content="componentData.data.content"
					:key="index"
				/>
			</div>
		</div>
		<!-- <van-row class="row">
			<van-col class="col" :span="12">
				<el-skeleton style="width: 100%;" :loading="loading">
					<template slot="template">
						<el-skeleton-item variant="image" style="width: 100%; height: 150px;" />
						<div style="padding: 14px;">
							<el-skeleton-item variant="p" style="width: 70%" />
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
			<van-col class="col" :span="12">
				<el-skeleton style="width: 100%;" :loading="loading">
					<template slot="template">
						<el-skeleton-item variant="image" style="width: 100%; height: 150px;" />
						<div style="padding: 14px;">
							<el-skeleton-item variant="p" style="width: 70%" />
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
	name: 'TwoCol',
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
			}else {
				return value;
			}
		},
		leftItems() {
			const items = this.componentData.data.items.filter((item, index) => {
				return index % 2 === 0;
			});
			return items;
		},
		rightItems() {
			const items = this.componentData.data.items.filter((item, index) => {
				return index % 2 !== 0;
			});
			return items;
		}
	}
};
// import { Vue, Component, Prop } from 'vue-property-decorator';
// import ColSub from './ColSub.vue';
// import { IMagicGoodsComponent } from '@/store/magic/magic-goods';
// @Component({
// 	name: 'twoCol',
// 	components: {
// 		ColSub
// 	}
// })
// export default class extends Vue {
// 	@Prop({ type: Object, required: true }) componentData!: IMagicGoodsComponent;

// 	get loading() {
// 		const lenght = this.componentData.data.items.length;
// 		return !lenght;
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
// 		const items = this.componentData.data.items.filter((item, index) => {
// 			return index % 2 === 0;
// 		});
// 		return items;
// 	}

// 	get rightItems() {
// 		const items = this.componentData.data.items.filter((item, index) => {
// 			return index % 2 !== 0;
// 		});
// 		return items;
// 	}
// }
</script>

<style lang="scss" scoped>
.row {
	align-items: flex-start;
}
.col {
	&:nth-child(even) {
		padding-left: 8rpx;
	}
	&:nth-child(odd) {
		padding-right: 8rpx;
	}
}
</style>
