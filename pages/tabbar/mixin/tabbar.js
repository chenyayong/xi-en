export default{
	computed: {
		cartCount(){
			// return this.$store.state.cartCount;
			return this.$store.getters.cartCount;
		}
	},
	watch: {
		cartCount(count){
			this.resetTabCartCount();
		}
	},
	onShow(){
		this.resetTabCartCount();
	},
	methods: {
		resetTabCartCount(){
			if(this.cartCount > 0){
				uni.setTabBarBadge({
					index: 2,
					text: '' + this.cartCount
				})
			}else{
				uni.removeTabBarBadge({
					index: 2
				})
			}
		}
	}
}