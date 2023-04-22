// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * 获取轮播图数据
	 * @returns {object} 返回轮播图数据
	 */
	getCarousel:async function() {
		const db = uniCloud.database()
		let res = await db.collection("carousel").orderBy('order','asc').get()
		return res
	},
	/**
	 * 获取轮播图数据
	 * @returns {object} 返回轮播图数据
	 */
	getIcons:async function() {
		const db = uniCloud.database()
		let res = await db.collection("icons").orderBy('order','asc').get()
		return res
	}
	
}
