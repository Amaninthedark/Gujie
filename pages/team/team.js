// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    arr_occupation: [],
    indexSize: 0,
    indicatorDots: false,
    autoplay: false,
    duration: 1, //可以控制动画
    list: '',
  
    
  },
  
  change(e) {
    this.setData({
      indexSize: e.detail.current
    })
  },
  scrollTo(e) {
    this.setData({
      indexSize: e.target.dataset.index
    })
  },

  //自定义 页面传值
  tapName:function(e){
    //这里需要前台加一个data-xx 这里才能获取
    var title = e.currentTarget.dataset.title;
    var year = e.currentTarget.dataset.year;
    var img = e.currentTarget.dataset.img;
    wx.navigateTo({
      url: '../Personaldetails/Personaldetails?get_name=' + title + '&get_year=' + year + '&get_img='+img
    })
  },

  /** 
   * 生命周期函数--监听页面加载
   */

 
  onLoad: function (options) {
    var URL=getApp().globalData.PHPURL;
    var that = this;
    //team职业
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: URL+'/User/occupation',
      data: {
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {

        that.setData({
          arr: res.data,
         
        });
        wx.request({
          //上线接口地址要是https测试可以使用http接口方式
          url: URL +'/User/number',
          data: {
          },
          method: 'GET',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {

            that.setData({
              arr_occupation: res.data
            });
            //将两张表数据进行相关联 进行判断将成员添加到职业数组中去    
            for (var i in that.data.arr) {
              var f = 0
              console.log(that.data.arr[i]);
              for (var j in that.data.arr_occupation) {

                var num = 'arr[' + i + '].list[' + f + ']'
                if (that.data.arr[i].profession == that.data.arr_occupation[j].occupation) {
                  f = f + 1;
                  that.setData({
                    [num]: that.data.arr_occupation[j]
                  })

                }
              }
            }
            
          },


        })
      },

    })  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})