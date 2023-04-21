"use strict";
const common_vendor = require("../../common/vendor.js");
const globalSearch = () => "../../components/global-search/index.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    globalSearch
  },
  methods: {
    async testto() {
      const helloco = common_vendor.Es.importObject("helloco");
      try {
        const res = await helloco.sum(1, 2);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    this.testto();
  }
};
if (!Array) {
  const _component_globalSearch = common_vendor.resolveComponent("globalSearch");
  _component_globalSearch();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(3, (i, k0, i0) => {
      return {};
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-EEIPDMU/Desktop/changqing_know-all/pages/community/index.vue"]]);
wx.createPage(MiniProgramPage);
