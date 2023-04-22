<template>
	<view class="home-wrapper">
		<!-- 搜索栏 -->
		<globalSearch></globalSearch>
		<!-- 轮播图 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item,index) in carouselInfo" :key="index">
					<navigator :url="item.link_url">
						<img :src="item.image_url" srcset="" lazy-load="true" mode="aspectFit"
							style="height: 100%; width: 100%;">
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<!-- 功能列表 -->
		<view class="icons-wrapper">
			<view class="icons-wrapper-inner">
				<view class="icons-item-wrapper" v-for="(icon,index) in iconsInfo.slice(0,7)" :key="index">
					<navigator :url="icon.link_url" class="icons-item">
						<img class="icons-item-img" :src="icon.icon_url" :alt="icon.title">
						<p class="icons-item-title">{{icon.title}}</p>
					</navigator>
				</view>
				<!-- 如果功能列表的数量超过八个,则加载 "更多功能页面" -->
				<view class="icons-item-wrapper" v-if="iconsInfo.length > 6">
					<navigator url="/pages/home/grid/more/more" class="icons-item">
						<img class="icons-item-img" src="@/static/images/grid/more.png" alt="更多功能">
						<p class="icons-item-title">更多功能</p>
					</navigator>
				</view>
			</view>
		</view>
		<!-- 占位符 -->
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
				interval: 4000000,
				duration: 500,
				carouselInfo: [], // 轮播图数据
				iconsInfo: [], // 功能区数据
			}
		},
		components: {
			globalSearch
		},
		methods: {
			/* 获取轮播图数据 */
			async getCarouselInfo() {
				const WebsiteContent = uniCloud.importObject("WebsiteContent")
				try {
					const res = await WebsiteContent.getCarousel()
					this.carouselInfo = res.data
				} catch (e) {
					console.warn("轮播图数据获取错误")
				}
			},
			/* 获取功能区数据 */
			async getIconsInfo() {
				const WebsiteContent = uniCloud.importObject("WebsiteContent")
				try {
					const res = await WebsiteContent.getIcons()
					this.iconsInfo = res.data
				} catch (e) {
					console.warn("功能区数据获取错误")
				}
			},

		},
		created() {
			this.getCarouselInfo()
			this.getIconsInfo()
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

		navigator {
			width: 100%;
			height: 100%;
		}
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
		padding: 1.25% 2.5%;
		height: 50vw;

		.icons-wrapper-inner {
			height: 100%;
			width: 100%;
			background-color: $uni-bg-color-grey;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			border-radius: 18rpx;
			background-color: #fff;
		}

		.icons-item-wrapper {
			width: 25%;
			height: 50%;
			box-sizing: border-box;
			padding: 10rpx;
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
