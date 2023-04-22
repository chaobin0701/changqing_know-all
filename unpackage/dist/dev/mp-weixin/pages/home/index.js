"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const globalSearch = () => "../../components/global-search/index.js";
const _sfc_main = {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 4e6,
      duration: 500,
      carouselInfo: [],
      // 轮播图数据
      iconsInfo: []
      // 功能区数据
    };
  },
  components: {
    globalSearch
  },
  methods: {
    /* 获取轮播图数据 */
    async getCarouselInfo() {
      const WebsiteContent = common_vendor.Es.importObject("WebsiteContent");
      try {
        const res = await WebsiteContent.getCarousel();
        this.carouselInfo = res.data;
      } catch (e) {
        console.warn("轮播图数据获取错误");
      }
    },
    /* 获取功能区数据 */
    async getIconsInfo() {
      const WebsiteContent = common_vendor.Es.importObject("WebsiteContent");
      try {
        const res = await WebsiteContent.getIcons();
        this.iconsInfo = res.data;
      } catch (e) {
        console.warn("功能区数据获取错误");
      }
    }
  },
  created() {
    this.getCarouselInfo();
    this.getIconsInfo();
  }
};
if (!Array) {
  const _component_globalSearch = common_vendor.resolveComponent("globalSearch");
  _component_globalSearch();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.carouselInfo, (item, index, i0) => {
      return {
        a: item.image_url,
        b: item.link_url,
        c: index
      };
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration,
    f: common_vendor.f($data.iconsInfo.slice(0, 7), (icon, index, i0) => {
      return {
        a: icon.icon_url,
        b: icon.title,
        c: common_vendor.t(icon.title),
        d: icon.link_url,
        e: index
      };
    }),
    g: $data.iconsInfo.length > 6
  }, $data.iconsInfo.length > 6 ? {
    h: common_assets._imports_0
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/83707/Desktop/changqing_know-all/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
