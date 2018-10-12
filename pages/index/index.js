//index.js
import { Base } from "../../utils/base.js";
let base = new Base();

Page({
    data: {

    },

    onLoad: function () {
        console.log("进入首页");
        wx.login({
            success: function (res) {
                console.log("刷新登录态");
            }
        });
    },

});
