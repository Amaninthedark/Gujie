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
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad test');
  }
})  