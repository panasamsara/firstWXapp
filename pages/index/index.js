//index.js
import Util from "../../utils/util.js";
let util = new Util();

Page({
    data: {

    },

    onLoad: function () {
      let _this = this
      console.log("进入首页");
      wx.login({
          success: function (res) {
              console.log("刷新登录态");
          }
      });
      let url = 'http://www.shu520.top/article?page=1&query='
      util.getAsync(url).then((res)=>{
        console.log(res)
        _this.setData({
          indexData: res.data.data.data
        })
      })
    },

});
