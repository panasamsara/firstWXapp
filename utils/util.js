

class Util {

  getAsync = (url, data) => {
    var p = new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'GET',
        header: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        dataType: 'json',
        data: {
          data: JSON.stringify(data)
        },
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    });
    return p;
  }

  postAsync = (data) => {
    var p = new Promise((resolve, reject) => {
      wx.request({
        url: URL,
        method: 'POST',
        header: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        dataType: 'json',
        data: {
          data: JSON.stringify(data)
        },
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    });
    return p;
  }

};

export default Util;
