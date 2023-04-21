<template>
	<view class="community-wrapper">
		<!-- 搜索栏 -->
		<globalSearch></globalSearch>
		<!-- category -->
		<view class="category-wrapper">
			<view class="category-wrapper-inner">
				<view class="category-item-wrapper active">
					推荐
				</view>
				<view class="category-item-wrapper" v-for="i in 3">
					明星
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import globalSearch from '../../components/global-search/index.vue'
	export default {
		data(){
			return {}
		},
		components:{
			globalSearch
		},
		methods:{
			async testto(){
				const helloco = uniCloud.importObject("helloco")
				try{
					const res = await helloco.sum(1,2)
					console.log(res)
				}catch(e){
					//TODO handle the exception
					console.log(e)
				}
			}
		},
		created(){
			this.testto()
		}
	}
</script>

<style lang="less">
	.category-wrapper{
		width: 100%;
		height: 80rpx;
		box-sizing: border-box;
		padding: 0rpx 30rpx;
		background-color: rgb(242, 242, 242);
	}
	.category-wrapper-inner{
		height: 100%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 0 20rpx 0;
		
		.category-item-wrapper{
			box-sizing: border-box;
			padding: 10rpx 30rpx;
			border-radius: 1000rpx;
			background-color: #fff;
			font-size: 28rpx;
			margin-right: 20rpx;
			&.active{
				color: #fff;
				background-color: green;
			}
		}
	}
</style>