<template>
	<view>
			<view class="uni-margin-wrap">
					<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration">
						<swiper-item>
							<view class="swiper-item">A_轮播图比例_21:9</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">B_轮播图比例_21:9</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">C_轮播图比例_21:9</view>
						</swiper-item>
					</swiper>
			</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
	            background: ['color1', 'color2', 'color3'],
	            indicatorDots: true,
	            autoplay: true,
	            interval: 2000,
	            duration: 500
	        }
	    },
	    methods: {
	        changeIndicatorDots(e) {
	            this.indicatorDots = !this.indicatorDots
	        },
	        changeAutoplay(e) {
	            this.autoplay = !this.autoplay
	        },
	        intervalChange(e) {
	            this.interval = e.target.value
	        },
	        durationChange(e) {
	            this.duration = e.target.value
	        }
	    }
	}
</script>

<style>
	.uni-margin-wrap {
			width: 100%;
		}
		.swiper {
			height: 42.85vw;
		}
		.swiper-item {
			display: block;
			height: 100%;
			line-height: 100rpx;
			text-align: center;
			background-color: red;
		}
		.swiper-list {
			margin-top: 40rpx;
			margin-bottom: 0;
		}
		.uni-common-mt {
			margin-top: 60rpx;
			position: relative;
		}
		.info {
			position: absolute;
			right: 20rpx;
		}
		.uni-padding-wrap {
			width: 550rpx;
			padding: 0 100rpx;
		}
</style>