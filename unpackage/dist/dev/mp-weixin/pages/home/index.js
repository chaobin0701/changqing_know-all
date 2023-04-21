"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const globalSearch = () => "../../components/global-search/index.js";
const _sfc_main = {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 4e3,
      duration: 500,
      carouselInfo: []
      // 轮播图数据
    };
  },
  components: {
    globalSearch
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
    async getCarousel() {
      const WebsiteContent = common_vendor.Es.importObject("WebsiteContent");
      try {
        const res = await WebsiteContent.getCarousel();
        this.carouselInfo = res.data;
        console.log(res.data);
      } catch (e) {
        console.warn("轮播图数据获取错误");
      }
    }
  },
  created() {
    this.getCarousel();
  }
};
if (!Array) {
  const _component_globalSearch = common_vendor.resolveComponent("globalSearch");
  _component_globalSearch();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.carouselInfo, (item, k0, i0) => {
      return {
        a: item.image_url
      };
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration,
    f: common_vendor.f(8, (i, k0, i0) => {
      return {};
    }),
    g: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-EEIPDMU/Desktop/changqing_know-all/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
