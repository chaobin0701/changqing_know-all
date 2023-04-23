<template>
	<view class="article-wrapper">
		<view class="article-wrapper-inner">
			<view class="article-user">
				<image src="../../static/images/grid/ditu.png" mode=""></image>
				<text>会飞的鱼</text>
			</view>
			<view class="article-title">2战轰112分，击败水花兄弟的，是另一对水花兄弟</view>
			<view class="article-content">
				<text>
					吧友们，勇士与国王队的季后赛，大家是不是看的热血沸腾，至少对我来说，真的是这样！
					2支同样擅长小球、3分的队伍，季后赛相遇也是打出了高质量的进攻大战，尤其是科尔和布朗这2位教练知根知底，又相互见招拆招，更是让这轮系列赛充满看点。
					国王和勇士系列赛吸引了很多球迷的关注，而2队显然也没有让球迷失望，前2战都是非常胶着的大战，直到最后才分出胜负，不过很不幸的是，比赛虽然打得艰难，但是国王队都成为了胜利者！ 2队首战
				</text>
				<view class="article-content-iamges">
					<image src="../../static/images/grid/ditu.png" mode=""></image>
					<image src="../../static/images/grid/ditu.png" mode=""></image>
					<image src="../../static/images/grid/ditu.png" mode=""></image>
				</view>
			</view>
			<view class="article-interaction-bar">
				<view class="interaction-bar-left">
					<view class="interaction-item">
						<view class="article-tag">
							推荐
						</view>
					</view>
				</view>
				<view class="interaction-bar-right">
					<view class="interaction-item">
						<uni-icons type="chat" size="24"></uni-icons>34
					</view>
					<view class="interaction-item">
						<uni-icons type="hand-up" size="24"></uni-icons>108
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "community-article"
	}
</script>

<style lang="scss">
	// 文章帖子样式
	.article-wrapper {
		width: 100vw;
		box-sizing: border-box;
		padding: 0 15rpx 15rpx 15rpx;
	}

	.article-wrapper-inner {
		width: 100%;
		border-radius: 15rpx;
		background-color: #fff;
		box-sizing: border-box;
		padding: 15rpx;
		display: flex;
		flex-direction: column;

		.article-user {
			height: 80rpx;
			margin-bottom: 10rpx;
			display: flex;
			align-items: center;

			image {
				width: 80rpx;
				height: 80rpx;
				margin-right: 15rpx;
			}

			text {
				line-height: 80rpx;
				font-size: 28rpx;
			}
		}

		.article-title {
			font-weight: bold;
			margin-bottom: 10rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}

		.article-content {
			margin-bottom: 20rpx;

			text {
				line-height: 45rpx;
				margin-bottom: 20rpx;
				display: block;

				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}

			.article-content-iamges {
				display: flex;
				justify-content: space-between;
				width: 100%;
				height: 200rpx;

				image {
					height: 100%;
					width: 32%;
				}
			}
		}
	}

	.article-interaction-bar {
		display: flex;
		justify-content: space-between;
		color: #808080;
		font-size: 26rpx;
		margin-bottom: 10rpx;

		.interaction-bar-left {
			.interaction-item {
				.article-tag {
					background-color: #F4F4F4;
					border-radius: 1000rpx;
					padding: 8rpx 20rpx;
					font-weight: 600;
				}
			}
		}

		.interaction-bar-right {
			display: flex;

			.interaction-item {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 30rpx;
			}
		}
	}
</style>
