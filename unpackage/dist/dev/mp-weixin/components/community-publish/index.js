"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    showMore() {
      this.isShow = true;
    },
    hideMore() {
      this.isShow = false;
    }
  }
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
  return common_vendor.e({
    a: !$data.isShow
  }, !$data.isShow ? {
    b: common_vendor.p({
      type: "plusempty",
      size: "24"
    }),
    c: common_vendor.o((...args) => $options.showMore && $options.showMore(...args))
  } : {}, {
    d: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-charutupian",
      size: "24"
    }),
    e: !$data.isShow ? 1 : "",
    f: common_vendor.o((...args) => $options.hideMore && $options.hideMore(...args)),
    g: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-wenzhang2",
      size: "24"
    }),
    h: !$data.isShow ? 1 : "",
    i: common_vendor.o((...args) => $options.hideMore && $options.hideMore(...args)),
    j: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-shipintianchong",
      size: "24"
    }),
    k: !$data.isShow ? 1 : "",
    l: common_vendor.o((...args) => $options.hideMore && $options.hideMore(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-EEIPDMU/Desktop/changqing_know-all/components/community-publish/index.vue"]]);
wx.createComponent(Component);
