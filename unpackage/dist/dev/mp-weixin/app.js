"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/community/index.js";
  "./pages/user/index.js";
  "./pages/home/grid/food/food.js";
  "./pages/home/grid/scenicSpot/scenicSpot.js";
  "./pages/home/grid/housekeeping/housekeeping.js";
  "./pages/home/grid/expressDelivery/expressDelivery.js";
  "./pages/home/grid/supermarket/supermarket.js";
  "./pages/home/grid/map/map.js";
  "./pages/home/grid/more/more.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/83707/Desktop/changqing_know-all/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
