<template>
	<view class="community-wrapper">
		<view class="float-box">
			<!-- 搜索栏 -->
			<globalSearch></globalSearch>
			<!-- category -->
			<view class="category-wrapper">
				<view class="category-wrapper-inner">
					<view class="category-item-wrapper" v-for="(item,index) in 10" :key="index"
						:class="{active:categoryIndex === index}" @click="selectCategory(index)">
						明星
					</view>
				</view>
			</view>
		</view>
		<!-- article_帖子 -->
		<view class="article-list">
			<communityArticle v-for="i in 10" :key="index"></communityArticle>
		</view>
		
	</view>
</template>

<script>
	import globalSearch from '../../components/global-search/index.vue'
	import communityArticle from "../../components/community-article/index.vue"
	export default {
		data() {
			return {
				categoryIndex: 0
			}
		},
		components: {
			globalSearch,
			communityArticle,
		},
		methods: {
			/* 切换不同分类 */
			async selectCategory(index) {
				this.categoryIndex = index
				// TODO:1.刷新文章列表
			}


		},
		created() {

		}
	}
</script>

<style lang="less">
	// 文章分类栏
	.category-wrapper {
		width: 100vw;
		height: 80rpx;
		box-sizing: border-box;
		padding: 0rpx 30rpx;
		background-color: rgb(242, 242, 242);

	}

	.float-box {
		position: fixed;
		top: 0;
	}

	.category-wrapper-inner {
		height: 100%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 0 20rpx 0;
		overflow: hidden;
		overflow-x: scroll;

		.category-item-wrapper {
			box-sizing: border-box;
			padding: 10rpx 30rpx;
			border-radius: 1000rpx;
			background-color: #fff;
			font-size: 28rpx;
			margin-right: 20rpx;
			white-space: nowrap;
			transition: all .2s;

			&.active {
				color: #fff;
				background-color: green;
			}
		}
	}

	/* 帖子的列表 */
	.article-list {
		margin-top: 180rpx;
	}
</style>
