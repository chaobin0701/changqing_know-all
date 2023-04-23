"use strict";
const common_vendor = require("../../../../common/vendor.js");
const globalSearch = () => "../../../../components/global-search/index.js";
const _sfc_main = {
  data() {
    return {
      shopData: [{
        image: "http://p1.meituan.net/deal/8d5f77d0b08b88ddfc7f31434e0b9c0c173511.jpg",
        // 店铺首页图片链接
        title: "美食之家",
        // 店铺名称
        subTitle: "专卖烤鱼",
        // 店铺名称
        distance: null,
        // 根据定位获取距离，暂未实现，先设置为null
        favorites: null,
        // 可以被收藏，显示收藏人数，暂未实现，先设置为null
        tags: ["水煮活鱼", "纸包鱼", "拼盘"],
        // 展示特殊标签，如主打菜谱、是否可外送
        pricePerPerson: "¥8",
        // 人均消费
        delivery: true,
        // 是否支持外送
        location: "长卿乡"
        // 店家在哪个村
      }]
    };
  },
  components: {
    globalSearch
  }
};
if (!Array) {
  const _component_globalSearch = common_vendor.resolveComponent("globalSearch");
  _component_globalSearch();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(10, (i, k0, i0) => {
      return {
        a: common_vendor.f($data.shopData, (shop, index, i1) => {
          return {
            a: shop.image,
            b: common_vendor.t(shop.title),
            c: common_vendor.t(shop.subTitle),
            d: common_vendor.t(shop.location),
            e: common_vendor.t(shop.delivery ? "可外送" : "不可外送"),
            f: common_vendor.f(shop.tags, (tag, index2, i2) => {
              return {
                a: common_vendor.t(tag),
                b: index2
              };
            }),
            g: common_vendor.t(shop.pricePerPerson),
            h: index
          };
        }),
        b: i
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-EEIPDMU/Desktop/changqing_know-all/pages/home/grid/food/food.vue"]]);
wx.createPage(MiniProgramPage);
