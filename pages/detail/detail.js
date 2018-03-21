Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerItem:[
'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/29739164/TB2KZBffv2H8KJjy1zkXXXr7pXa_!!0-saturn_solar.jpg_580x580Q90.jpg_.webp',
'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3339899948/TB1qp8Xc_fN8KJjSZFjXXXGvpXa_!!2-item_pic.png_580x580Q90.jpg_.webp',
'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3416520479/TB1YUopic2vU1JjSZFwXXX2cpXa_!!0-item_pic.jpg_580x580Q90.jpg_.webp'
    ],
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    } ,
    num: 0,
    num2:0,
    colorfenlei:[
      {name:'罗汉沙发2.1米',id:0},
      { name: '角几', id:1 },
      { name: '单人沙发', id:2 },
      { name: '长茶几120*60*42', id:3 },
      { name: '方茶几120*120*45', id:4}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  tabGoods: function (e) {
    var _datasetId = e.target.dataset.id;
    //console.log("----"+_datasetId+"----");  
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    })
  },
  changPro: function (e) {
    //console.log(e);
    var that = this;
      var spec_id = e.currentTarget.dataset.spec_id;
    this.setData({
      // prodetail2: this.data.prodetail[num],
      num: spec_id
    });
  },
   goods_add: function (e) {
    let num2 = this.data.num2;
    num2 = num2 + 1;
    this.setData({
      num2: num2
    });
  },
  goods_sub: function (e) {
    let num2 = this.data.num2;
    if (num2 <= 0) {
      return false;
    }
    num2 = num2 - 1;
    this.setData({
      num2:num2
    });
  }
})