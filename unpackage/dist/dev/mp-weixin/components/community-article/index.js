"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "community-article"
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "chat",
      size: "24"
    }),
    b: common_vendor.p({
      type: "hand-up",
      size: "24"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-EEIPDMU/Desktop/changqing_know-all/components/community-article/index.vue"]]);
wx.createComponent(Component);
