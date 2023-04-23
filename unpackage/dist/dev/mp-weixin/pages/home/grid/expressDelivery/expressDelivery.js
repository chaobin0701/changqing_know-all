"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      expressPickupForm: {
        //快递代取服务
        "name": "收件人姓名（字符串类型）",
        "phone": "收件人电话（字符串类型，需要满足电话号码格式）",
        "address": "收件地址（字符串类型）",
        "weight": "快递预计重量（数值类型，单位为千克）",
        "pickupCode": "快递取件码（字符串类型）",
        "trackingNumber": "快递单号（可选属性，字符串类型）",
        "pickupTime": "代收时间段（字符串类型）",
        "company": "快递公司名称（字符串类型）"
      }
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_card2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_section2)();
}
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_easyinput = () => "../../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["is-shadow"]: false,
      ["is-full"]: true
    }),
    b: common_vendor.o(($event) => $data.expressPickupForm.name = $event),
    c: common_vendor.p({
      placeholder: "请输入收件人姓名",
      modelValue: $data.expressPickupForm.name
    }),
    d: common_vendor.p({
      label: "收件人姓名",
      required: true
    }),
    e: common_vendor.o(($event) => $data.expressPickupForm.phone = $event),
    f: common_vendor.p({
      placeholder: "请输入收件人电话",
      modelValue: $data.expressPickupForm.phone
    }),
    g: common_vendor.p({
      label: "收件人电话",
      required: true
    }),
    h: common_vendor.o(($event) => $data.expressPickupForm.address = $event),
    i: common_vendor.p({
      placeholder: "请输入收件地址",
      modelValue: $data.expressPickupForm.address
    }),
    j: common_vendor.p({
      label: "收件地址",
      required: true
    }),
    k: common_vendor.o(($event) => $data.expressPickupForm.weight = $event),
    l: common_vendor.p({
      placeholder: "请输入快递预计重量",
      modelValue: $data.expressPickupForm.weight
    }),
    m: common_vendor.p({
      label: "快递预计重量",
      required: true
    }),
    n: common_vendor.o(($event) => $data.expressPickupForm.pickupCode = $event),
    o: common_vendor.p({
      placeholder: "请输入快递取件码",
      modelValue: $data.expressPickupForm.pickupCode
    }),
    p: common_vendor.p({
      label: "快递取件码",
      required: true
    }),
    q: common_vendor.o(($event) => $data.expressPickupForm.trackingNumber = $event),
    r: common_vendor.p({
      placeholder: "请输入快递单号",
      modelValue: $data.expressPickupForm.trackingNumber
    }),
    s: common_vendor.p({
      label: "快递单号",
      required: true
    }),
    t: common_vendor.o(($event) => $data.expressPickupForm.pickupTime = $event),
    v: common_vendor.p({
      placeholder: "请输入代收时间段",
      modelValue: $data.expressPickupForm.pickupTime
    }),
    w: common_vendor.p({
      label: "代收时间段",
      required: true
    }),
    x: common_vendor.o(($event) => $data.expressPickupForm.company = $event),
    y: common_vendor.p({
      placeholder: "请输入快递公司",
      modelValue: $data.expressPickupForm.company
    }),
    z: common_vendor.p({
      label: "快递公司",
      required: true
    }),
    A: common_vendor.sr("baseForm", "48c1a9ce-2,48c1a9ce-1"),
    B: common_vendor.p({
      modelValue: $data.expressPickupForm
    }),
    C: common_vendor.p({
      title: "基本用法",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Administrator.DESKTOP-EEIPDMU/Desktop/changqing_know-all/pages/home/grid/expressDelivery/expressDelivery.vue"]]);
wx.createPage(MiniProgramPage);
