<template>
	<view class="home-wrapper">
		<!-- 搜索栏 -->
		<globalSearch></globalSearch>
		<!-- 轮播图 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="item in carouselInfo">
					<img :src="item.image_url" srcset="" lazy-load="true" mode="aspectFit" style="height: 100%; width: 100%;">
				</swiper-item>
			</swiper>
		</view>
		<!-- 功能列表 -->
		<view class="icons-wrapper">
			<view class="icons-wrapper-inner">
				<view class="icons-item-wrapper" v-for="i in 8">
					<a href="#" class="icons-item">
						<img class="icons-item-img" src="@/static/images/grid/chaoshi.png" alt="">
						<p class="icons-item-title">超市</p>
					</a>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="fo" style="height: 500rpx;order: 1px solid green;box-sizing: border-box;">
			<text style="color: red; b ">
				占位: 功能设想, 软广区域? 热门帖子区域? 文章区域?
			</text>
		</view>
	</view>
</template>

<script>
import globalSearch from '../../components/global-search/index.vue'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 4000,
				duration: 500,
				carouselInfo:[], // 轮播图数据
			}
		},
		components:{
			globalSearch
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
			},
			async getCarousel(){
				const WebsiteContent = uniCloud.importObject("WebsiteContent")
				try{
					const res = await WebsiteContent.getCarousel()
					this.carouselInfo = res.data
					console.log(res.data)
				}catch(e){
					console.warn("轮播图数据获取错误")
				}
			}

		},
		created(){
			this.getCarousel()
		}
	}
</script>

<style lang="scss">
	/* 轮播图样式 */
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

	/* 功能区 */
	.icons-wrapper {
		width: 100vw;
		box-sizing: border-box;
		padding: 2.5%;
		height: 47.5vw;
		border: 1px solid red;

		.icons-wrapper-inner {
			height: 100%;
			width: 100%;
			background-color: $uni-bg-color-grey;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}

		.icons-item-wrapper {
			width: 25%;
			height: 50%;
			box-sizing: border-box;
			padding: 10rpx;
			border: 1px solid #ccc;
		}

		.icons-item {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			.icons-item-img {
				height: 55%;
				width: 55%;
			}

			.icons-item-title {}
		}
	}
</style>
