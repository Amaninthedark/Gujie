//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
     URL : getApp().globalData.PHPURL
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  getUserInfo: function (e) {
    var that=this;
    console.log(e);
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.setStorageSync('code', res.code)

      }
    })
    // 获取用户信息
    wx.getSetting({
      success: response => {
        console.log(response);
        //   if (!response.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框 
        wx.getUserInfo({
          success: res => {
            // 可以将 res 发送给后台解码出 unionId              
            console.log(res);
            wx.request({
              url: that.data.URL+'/Login',

              data: {
                'encryptedData': res.encryptedData,
                'iv': res.iv,
                'code': wx.getStorageSync('code')
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              header: {
                'content-type': 'application/json'
              }, // 设置请求的 header
              success: function (res) {
                wx.request({
                  url: that.data.URL +'/User/userquest',
                  data: {
                    'openId_data': res.data.openId,
                    'avatarUrl_data': res.data.avatarUrl,
                    'nickName_data': res.data.nickName
                  },
                  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                  header: {
                    'content-type': 'application/json'
                  }, // 设置请求的 header
                  success: function (resx) {                
                    wx.setStorageSync('UserId', resx.data.userId);
                    wx.setStorageSync('login',1);
                    that.shopping_trolley_query()
                  },
                })
              },
              fail: function (err) {
                console.log(err);
              }
            })
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })

        //    }
      }
    })
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    
   
  },
    //获取购物车信息
  shopping_trolley_query:function(){
    var that = this;
    wx.request({
      url: that.data.URL + '/Mall/shopping_trolley_query',
      data: {
        'userId_data': wx.getStorageSync('UserId'),
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header
      success: function (res) {
        wx.setStorageSync('carts',JSON.parse(res.data.good_numarr));
      },
    })
  },

  toast: function () {
    wx.navigateTo({
      url: '../dai/daifukuang'
    })
  },
  toast2: function () {
    wx.navigateTo({
      url: '../dai/daifahuo'
    })
  },
  toast3: function () {
    wx.navigateTo({
      url: '../dai/daishouhuo'
    })
  },
  toast4: function () {
    wx.navigateTo({
      url: '../dai/shouhou'
    })
  }
})
