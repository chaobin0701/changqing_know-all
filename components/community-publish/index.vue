<template>
	<view class="publish-wrapper">
		<view class="publish-item" v-if="!isShow" @click="showMore">
			<uni-icons type="plusempty" size="24"></uni-icons>
			<text>分享</text>
		</view>
		<view class="publish-item" :class="{hidden:!isShow}" @click="hideMore">
			<uni-icons custom-prefix="iconfont" type="icon-charutupian" size="24"></uni-icons>
			<text>发图文</text>
		</view>
		<view class="publish-item" :class="{hidden:!isShow}" @click="hideMore">
			<uni-icons custom-prefix="iconfont" type="icon-wenzhang2" size="24"></uni-icons>
			<text>发帖子</text>
		</view>
		<view class="publish-item" :class="{hidden:!isShow}" @click="hideMore">
			<uni-icons custom-prefix="iconfont" type="icon-shipintianchong" size="24"></uni-icons>
			<text>小视频</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			}
		},
		methods: {
			showMore() {
				this.isShow = true
			},

			hideMore() {
				this.isShow = false
			}
		}

	}
</script>

<style lang="scss">
	.publish-item.hidden {
		width: 0px !important;
		height: 0px !important;
		visibility: hidden;
		margin: 0 !important;
		position: fixed;

		&::before {
			display: none !important;
		}
	}

	.publish-wrapper {
		position: fixed;
		right: 30rpx;
		bottom: 80rpx;
		display: flex;
		border-radius: 1000rpx;
		background-color: #fff;
		padding: 15rpx 40rpx;
		box-shadow: 0px 0px 10rpx 2rpx rgba(0, 0, 0, 0.1);

		.publish-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;	
			&:nth-child(n+2) {
				margin-left: 40rpx;
				position: relative;

				&::before {
					content: "";
					position: absolute;
					display: block;
					height: 60rpx;
					width: 2rpx;
					background-color: #BBBBBB;
					left: -20rpx;
					bottom: 15rpx;
					/* 可选，根据需要进行调整 */
				}
			}

			.icon {
				width: 70rpx;
				height: 70rpx;
			}

			text {
				color: #666970;
				font-size: 28rpx;
				white-space: nowrap;
			}
		}
	}
</style>
