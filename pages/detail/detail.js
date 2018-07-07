Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerItem:[],
  
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    } ,
    colornum: 0,
    sizenum:0,
    num2:0,
    colorfenlei:[
      {name:'',id:''},
    ],
    goods_num:'',
    goods:'',
    goods_index:[],
    goods_imgs:[],
    goods_size:[{size:'',id:''}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var URL = getApp().globalData.IMGURL;
    var that=this;
    that.setData({
     goods_num:options.goods_num
    })
    wx.getStorage({
      key: 'GOODS',
      success: function (res) {
        that.setData({
          goods:res.data
        })
        for(var i=0 ;i<that.data.goods.length;i++){
            if(that.data.goods[i].goods_num==that.data.goods_num){
              that.setData({
                goods_index: that.data.goods[i],
                goods_imgs: JSON.parse(that.data.goods[i].goods_imgs)
              }) 
            }
         } 
       // console.log(URL);
         for (var i = 0; i < that.data.goods_imgs.length;i++)
         {
           var num = 'bannerItem[' + i + ']';         
           var sum = URL + '/goods/' + that.data.goods_imgs[i]
           that.setData({
             [num]: sum,
          
           })
         }
        
        // 轮播图 详情图
        that.setData({
          bottomItem: that.data.bannerItem,
        })

        //字符串分割 
        //尺寸大小 
        var dateList = that.data.goods_index.goods_size.split(",");
        for (var i in dateList) {
          var num ='goods_size['+i+'].size'
          var num2 = 'goods_size[' + i + '].id'
          that.setData({
            [num]: dateList[i],
            [num2]:i
          })
        }
        //颜色分类
        var dateList = that.data.goods_index.goods_color.split(",");
        for (var i in dateList) {
          var num = 'colorfenlei[' + i + '].name'
          var num2 = 'colorfenlei[' + i + '].id'
          that.setData({
            [num]: dateList[i],
            [num2]: i
          })
        }
       
    
         
      }//suceess结束位置
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
      colornum: spec_id
    });
  },
  changSize: function (e) {
    //console.log(e);
    var that = this;
    var attr_id = e.currentTarget.dataset.attr_id;
    this.setData({
      // prodetail2: this.data.prodetail[num],
      sizenum: attr_id
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