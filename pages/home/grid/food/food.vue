<template>
	<view class="food-wrapper">
		<view class="food-wrapper-inner">
			<!-- 搜索栏_店铺 -->
			<globalSearch></globalSearch>
			<!-- 筛选栏 | 距离、村选择、种类选择等-->

			<!-- 店铺列表 -->
			<view class="shop-list-wrapper">
				<view class="shop-item-wrapper" v-for="i in 10" :key="i">
					<view class="shop-item" v-for="(shop,index) in shopData" :key="index">
						<img :src="shop.image" alt="店铺图片" class="shop-image">
						<view class="shop-info-wrapper">
							<view class="shop-title">{{shop.title}}</view>
							<text class="shop-subTitle">{{shop.subTitle}}_</text>
							<text class="shop-location">[{{shop.location}}]</text>
							<view class="shop-tags">
								<view class="shop-tag">
									{{shop.delivery ? '可外送':'不可外送'}}
								</view>
								<view class="shop-tag" v-for="(tag,index) in shop.tags" :key="index">
									{{tag}}
								</view>
							</view>
							<view class="shop-other-info">
								<text>人居消费:{{shop.pricePerPerson}}元</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import globalSearch from '@/components/global-search/index.vue'
	export default {
		data() {
			return {
				shopData: [{
					image: 'http://p1.meituan.net/deal/8d5f77d0b08b88ddfc7f31434e0b9c0c173511.jpg', // 店铺首页图片链接
					title: '美食之家', // 店铺名称
					subTitle: '专卖烤鱼', // 店铺名称
					distance: null, // 根据定位获取距离，暂未实现，先设置为null
					favorites: null, // 可以被收藏，显示收藏人数，暂未实现，先设置为null
					tags: ['水煮活鱼', '纸包鱼', '拼盘'], // 展示特殊标签，如主打菜谱、是否可外送
					pricePerPerson: "¥8", // 人均消费
					delivery: true, // 是否支持外送
					location: '长卿乡', // 店家在哪个村
				}]
			};
		},
		components: {
			globalSearch
		},
	}
</script>

<style lang="scss">
	/* 店铺列表 */
	.shop-list-wrapper {
		padding: 20rpx;

		.shop-item-wrapper {
			width: 100%;

		}
	}

	.shop-item {
		display: flex;
		align-items: center;
		border-radius: 20rpx;
		background-color: #fff;
		box-sizing: border-box;
		padding: 20rpx;
		margin-bottom: 20rpx;

		.shop-image {
			width: 210rpx;
			height: 210rpx;
			border-radius: 20rpx;
			margin-right: 20rpx;
		}

		.shop-info-wrapper {
			font-size: 32rpx;

			.shop-title {
				font-size: 32rpx;
			}

			.shop-subTitle {
				color: #ccc;
			}

			.shop-location {
				color: #ccc;
			}

			.shop-delivery {
				color: orange;
			}

			.shop-tags {
				margin-top: 10rpx;
				display: flex;
				flex-wrap: wrap;

				.shop-tag {
					margin-right: 10rpx;
					margin-bottom: 10rpx;
					border-radius: 10rpx;
					padding: 2rpx 8rpx;
					color: red;
					border: 1px solid red;
					font-size: 28rpx;
				}
			}

		}

		.shop-other-info {
			text {}
		}
	}
</style>
