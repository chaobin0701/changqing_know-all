<template>
	<view class="search-wrapper">
		<view class="search-wrapper-ineer">
			<input type="text" placeholder="请输入搜索关键词">
			<text>搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "global-search"
	}
</script>

<style lang="scss">
	.search-wrapper {
		width: 100vw;
		height: 90rpx;
		background-color: rgb(242, 242, 242);
		box-sizing: border-box;
		padding: 18rpx 30rpx;
	}
	.search-wrapper-ineer{
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		input{
			box-sizing: border-box;
			height: 100%;
			padding: 10rpx;
			border-radius: 5rpx;
			flex: 1;
			background-color: #fff;
			margin-right: 20rpx;
		}
		text{
			font-size: 30rpx;
		}
	}
</style>
