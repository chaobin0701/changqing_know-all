"use strict";
const common_vendor = require("../../common/vendor.js");
const globalSearch = () => "../../components/global-search/index.js";
const communityArticle = () => "../../components/community-article/index.js";
const communityPublish = () => "../../components/community-publish/index.js";
const _sfc_main = {
  data() {
    return {
      categoryIndex: 0
    };
  },
  components: {
    globalSearch,
    communityArticle,
    communityPublish
  },
  methods: {
    /* 切换不同分类 */
    async selectCategory(index) {
      this.categoryIndex = index;
    }
  },
  created() {
  }
};
if (!Array) {
  const _component_globalSearch = common_vendor.resolveComponent("globalSearch");
  const _component_communityArticle = common_vendor.resolveComponent("communityArticle");
  const _component_communityPublish = common_vendor.resolveComponent("communityPublish");
  (_component_globalSearch + _component_communityArticle + _component_communityPublish)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(10, (item, index, i0) => {
      return {
        a: index,
        b: $data.categoryIndex === index ? 1 : "",
        c: common_vendor.o(($event) => $options.selectCategory(index), index)
      };
    }),
    b: common_vendor.f(3, (i, k0, i0) => {
      return {
        a: "4837df1a-1-" + i0
      };
    }),
    c: _ctx.index
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-EEIPDMU/Desktop/changqing_know-all/pages/community/index.vue"]]);
wx.createPage(MiniProgramPage);
