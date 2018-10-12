
// 测试环境
// const URL = 'https://wxappprod.izxcs.com/zxcity_restful/ws/rest';
// 正式环境
// const URL = 'https://wxapp.izxcs.com/zxcity_restful/ws/rest';
// 本地环境
// const URL = 'http://192.168.11.141:8080/zxcity_restful/ws/rest';
// 内网穿透
// const URL = 'https://api.maxzuo.com:8082/zxcity_restful/ws/rest';
// 主线测试环境
const URL = 'https://wxappmain.izxcs.com/zxcity_restful/ws/rest';

class Base {

    request(params) {
        let that = this;
        wx.request({
            url: URL,
            method: 'POST',
            dataType: 'json',
            data: {
                cmd: params.cmd,
                data: JSON.stringify(params.data),
                version: 1
            },
            header: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            success: function (res) {
                console.log("请求成功");
                params.sCallback && params.sCallback(res.data);
            },
            fail: function (err) {
                console.log("请求成功");
                that._processError(err);
                // params.eCallback && params.eCallback(err);
            }
        });
    }

    _processError(err){
        console.log(err);
    }

};

export {Base};
