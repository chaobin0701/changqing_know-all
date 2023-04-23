<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/static/iconfont.css";
	/*每个页面公共css */
	page {
		background-color: rgb(244, 244, 244);
	}

	.uni-nav-bar {
		background-color: #F56C6C;
	}
</style>
