"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      // 轮播图数据
      pics: [
        { id: "1", url: "https://i.pinimg.com/736x/64/45/03/64450323b83b8ce2a21cf016ec648d2d.jpg" },
        { id: "2", url: "https://i.pinimg.com/736x/d6/bf/c8/d6bfc893124cfcffcca80cbdd9422766.jpg" },
        { id: "3", url: "https://i.pinimg.com/736x/0f/46/8b/0f468b53bce83d59a004aee94cc6364c.jpg" },
        { id: "4", url: "https://i.pinimg.com/736x/10/35/90/1035905b519e92e925510ce23b7d2212.jpg" }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    previewImage(url) {
      common_vendor.index.previewImage({
        urls: this.pics.map((item) => item.url),
        current: url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pics, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.previewImage(item.url), item.id),
        b: item.url,
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
