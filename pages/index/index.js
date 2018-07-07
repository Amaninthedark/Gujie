var app = getApp()
Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '/images/13.jpg'
      }, {
        link: '/pages/logs/logs',
        url: '/images/12.jpg'
      }, {
        link: '/pages/test/test',
        url: '/images/11.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    }
  },
 
  scrollTopFun: function (e) {
    console.log(e.detail);
    if (e.detail.scrollTop > 100) {//触发gotop的显示条件  
      this.setData({
        'scrollTop.goTop_show': true
      });
      console.log(this.data.scrollTop)
    } else {
      this.setData({
        'scrollTop.goTop_show': false
      });
    }
  },


  onLoad: function () {
    
    console.log('onLoad test');
  },
  kefu:function(){
    wx.navigateTo({
      url: '../kefuhuihua/kefuhuihua'
    })
  },
  shangcheng: function () {
    wx.switchTab({
      url: '../mall/mall'
    });
  },
  team: function () {
    wx.switchTab({
      url: '../team/team'
    });
  },
  zaixiangongdi: function () {
    wx.navigateTo({
      url: '../gongdifenbu/gongdifenbu'
    });
  },
  yuyue: function () {
    wx.navigateTo({
      url: '../yuyue/yuyue'
    });
  },
  price: function () {
    wx.switchTab({
      url: '../zaixiangongdi/zaixiangongdi'
    });
  },
  calculator: function () {
    wx.navigateTo({
      url: '../calculator/calculator' 
    });
  },
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    });
  }
})  