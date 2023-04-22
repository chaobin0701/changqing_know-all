<template>
	<view class="user-wrapper">
		<!-- 用户信息 -->
		<view class="userinfo-wrapper">
			<img src="../../static/images/grid/ditu.png" alt="" srcset="" class="avatar-user">
			<view class="info">
				<text class="name">猪猪侠</text>
				<text class="account">18973827139</text>
			</view>
		</view>
		<!-- 功能区1 -->
		<view class="funcArea">
			<view class="title">

			</view>
			<view class="icons-wrapper">
				<view class="icons-item-wrapper">
					<view class="icons-item" v-for="i in 5">
						<img src="../../static/images/grid/ditu.png" alt="" class="icon">
						<text class="">待付款</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 功能区2 -->
		<view class="funcArea">
			<view class="title">
				工地服务
			</view>
			<view class="icons-wrapper">
				<view class="icons-item-wrapper">
					<view class="icons-item" v-for="i in 3">
						<img src="../../static/images/grid/ditu.png" alt="" class="icon">
						<text class="">待付款</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 功能区3 -->
		<view class="funcArea">
			<view class="title">
				工地服务
			</view>
			<view class="icons-wrapper">
				<view class="icons-item-wrapper">
					<view class="icons-item" v-for="i in 3">
						<img src="../../static/images/grid/ditu.png" alt="" class="icon">
						<text class="">待付款</text>
					</view>
				</view>
			</view>
		</view>


		<!-- 功能区4 -->
		<view class="funcArea footer">
			<view class="icons-wrapper">
				<view class="icons-item-wrapper">
					<view class="icons-item" v-for="i in 4">
						<img src="../../static/images/grid/ditu.png" alt="" class="icon">
						<text class="">待付款</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
</script>

<style lang="scss">
	.user-wrapper {
		width: 100vw;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
	}

	/* 用户信息 */
	.userinfo-wrapper {
		display: flex;
		padding: 10rpx;
		color: #fff;
		margin-bottom: 20rpx;

		.avatar-user {
			width: 110rpx;
			height: 110rpx;
			border-radius: 10000rpx;
			overflow: hidden;
			margin: 0 20rpx 0 10rpx;
		}

		.info {
			display: flex;
			justify-content: center;
			flex-direction: column;

			.name {
				font-size: 32rpx;
			}

			.account {
				font-size: 26rpx;
			}
		}
	}

	/* 功能区 */
	.funcArea {
		background-color: #fff;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		box-sizing: border-box;
		padding: 15rpx 30rpx;
		&.footer{
			position: fixed;
			bottom: 0;
			width:  calc(100vw - 60rpx);
			background-color: rgba(0, 0, 0,.0);
			.icons-item-wrapper{
				justify-content: space-between;
			}
		}
		.title {
			font-size: 32rpx;
			margin-bottom: 15rpx;
		}

		.icons-wrapper {}

		.icons-item-wrapper {
			display: flex;
			justify-content: space-around;

			.icons-item {
				display: flex;
				flex-direction: column;

				.icon {
					width: 90rpx;
					height: 90rpx;
					margin-bottom: 10rpx;
				}

				text {}
			}
		}
	}
</style>
