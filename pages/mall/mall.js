var URL = getApp().globalData.PHPURL;
var iURL = getApp().globalData.IMGURL;
Page({
  data: {
    backups:[],//备份的货物数据
    classify: [],//原始的货物数据
    currentId:1,
    classifyid:0,
    classifyarr: [{name:'',begin: 0,end:0}],
    list:['', '', '', '', '', '', "", "", "", ""],
    goods:[],
    URLimg:"",
    goods_img:[],
    Sales:false,
    price:false,
    countclassify:'',
    countgoods: '',
  },

 //整体下拉刷新
  onPullDownRefresh: function () {
    var that=this;
    that.setData({
      Sales: false,
      price: false,
    })
    that.onLoad_d();
    wx.stopPullDownRefresh()
  },

  //列表上拉加载
  bindDownLoad:function(){
    var that=this;
    var countgoods=0;
    var goodsarr = that.data.goods; 
    console.log(that.data.classifyarr);
    var currentId = that.data.currentId-1
    var classify_name = that.data.classifyarr[currentId].name
    var classify_begin = 'classifyarr[' + currentId + '].begin'
    var classify_end = 'classifyarr[' + currentId + '].end'
    var classify_begin_sum = that.data.classifyarr[currentId].begin + 10;
    var classify_end_sum = that.data.classifyarr[currentId].end + 10;
    console.log(classify_begin_sum);
    console.log(that.data.classifyarr[currentId]);
    that.setData({
      [classify_begin]: classify_begin_sum,
      [classify_end]: classify_end_sum,
    })
        wx.request({
          //上线接口地址要是https测试可以使用http接口方式 获取左侧列表中包含着获取货物列表
          url: URL + '/Mall/goods_query_refresh',
          data: {
            classify_data: that.data.classifyarr[currentId].name,
            begin_data: that.data.classifyarr[currentId].begin,
            end_data: that.data.classifyarr[currentId].end,
          },
          method: 'GET',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) { 
              that.setData({
                countgoods: 0
              })
             
              for (var j in res.data) {
                goodsarr.push(res.data[that.data.countgoods])
                that.setData({
                  countgoods: that.data.countgoods + 1
                })
              } 
                  that.setData({
                    goods: goodsarr,
                  });
                  //获取到后存起来方便后面调用 
                  wx.setStorage({
                    key: "GOODS",
                    data: that.data.goods
                  })
                  //将货物添加到分类列表
                  for (var i in that.data.classify) {
                    var f = 0
                    for (var j in that.data.goods) {
                      var num = 'classify[' + i + '].goods_classify_list[' + f + ']'
                      if (that.data.classify[i].goods_classify_name == that.data.goods[j].goods_classify) {
                        f = f + 1;
                        that.setData({
                          [num]: that.data.goods[j]
                        })
                      }
                    }
                  }
                  //备份原始数据
                  that.setData({
                    backups: that.data.classify
                  });
              if(res.data.length==0)
              {
                  wx.showToast({
                    title: '没有了',              
                     image: '/images/W.png'
                  })
              }else{
                wx.showToast({
                  title: '加载中',
                  icon: 'loading'
                                  })
              }
          }
        })
  
 //   console.log('circle 下一页');
  },

  //商品排序控制器
  sortGoods_control:function(e){
    var that=this;
    var sortid = e.currentTarget.dataset.sort;
    if (sortid==1){
      var Sales = !that.data.Sales
      that.setData({
        Sales: Sales,
        price:false
      })
    }else{
      var price = !that.data.price
      that.setData({
        Sales: false,
        price: price
      })
    }
   
    that.onShow();
  },

  //商品排序
  sortGoods:function(){
    var that = this;
    var classiyLT = that.data.classify
    console.log(that.data.classify);
    if (that.data.Sales){
    var classiyLT = that.data.classify
    for (var i = 0; i < classiyLT.length; i++) {
      for (var j = 0; j < classiyLT[i].goods_classify_list.length - 1; j++) {
        for (var k = 0; k < classiyLT[i].goods_classify_list.length - 1-j ; k++)// j开始等于0，  
        { 
          if (parseInt(classiyLT[i].goods_classify_list[k].goods_out) < parseInt(classiyLT[i].goods_classify_list[k + 1].goods_out)) {
            var arrt = classiyLT[i].goods_classify_list[k];
            classiyLT[i].goods_classify_list[k] = classiyLT[i].goods_classify_list[k + 1];
            classiyLT[i].goods_classify_list[k + 1] = arrt;
          }
        }  
      }
     }
    }
    else if (that.data.price){
      var classiyLT = that.data.classify
      for (var i = 0; i < classiyLT.length; i++) {
        for (var j = 0; j < classiyLT[i].goods_classify_list.length - 1; j++) {
          for (var k = 0; k < classiyLT[i].goods_classify_list.length - 1 - j; k++)// j开始等于0，  
          {
            if (parseInt(classiyLT[i].goods_classify_list[k].goods_price) > parseInt(classiyLT[i].goods_classify_list[k + 1].goods_price)) {
              var arrt = classiyLT[i].goods_classify_list[k];
              classiyLT[i].goods_classify_list[k] = classiyLT[i].goods_classify_list[k + 1];
              classiyLT[i].goods_classify_list[k + 1] = arrt;
            }
          }
        }
      }
    }else{
      classiyLT = that.data.backups;
    }
    return classiyLT;
  },

  //列表刷新初始化 
  Refreshinitial: function (classify){
    var that=this;
    for (var i = 0; i < classify.length; i++) {
      var classify_name = 'classifyarr[' + i + '].name'
      var classify_begin = 'classifyarr[' + i + '].begin'
      var classify_end = 'classifyarr[' + i + '].end'
      that.setData({
        [classify_name]: classify[i].goods_classify_name,
        [classify_begin]: 0,
        [classify_end]: 10,
      })
    }
  
  },

  //页面刷新
  onLoad_d:function(){
    var that = this;
    var goodsarr=[]; 
       that.setData({
       URLimg: iURL
    });
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式 获取左侧列表中包含着获取货物列表
      url: URL + '/Mall/goods_classify',
      data: {
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          classify: res.data
        });
        that.Refreshinitial(res.data);
        that.setData({
          countclassify:0
        })
        for (var i = 0; i < that.data.classifyarr.length;i++)
        {
       
                wx.request({
                  //上线接口地址要是https测试可以使用http接口方式 获取左侧列表中包含着获取货物列表
                  url: URL + '/Mall/goods_query_refresh',
                  data: {
                    classify_data: that.data.classifyarr[that.data.countclassify].name,
                    begin_data: that.data.classifyarr[that.data.countclassify].begin,
                    end_data: that.data.classifyarr[that.data.countclassify].end,

                  },
                  method: 'GET', 
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function (res) {          
        //  goods_img: JSON.parse(res.data[6].goods_img)//json字符串转数组
                  that.setData({
                    countgoods: 0
                  })
                  for(var j in res.data){
                    goodsarr.push(res.data[that.data.countgoods])
                    that.setData({
                      countgoods: that.data.countgoods+1
                    })
                  }
              
                 if (that.data.countclassify === that.data.classifyarr.length){
                
                      that.setData({
                        goods: goodsarr,
                      });
                        //获取到后存起来方便后面调用 
                        wx.setStorage({
                          key: "GOODS",
                          data: that.data.goods 
                        })
                      
                      }
                        //将货物添加到分类列表
                        for (var i in that.data.classify) {
                          var f = 0
                          for (var j in that.data.goods) {
                            var num = 'classify[' + i + '].goods_classify_list[' + f + ']'
                            if (that.data.classify[i].goods_classify_name == that.data.goods[j].goods_classify) {
                              f = f + 1;
                              that.setData({
                                [num]: that.data.goods[j]
                              })
                            }
                          }
                        }
                        //备份原始数据
                        that.setData({
                          backups: that.data.classify
                        });
                       
                 },
                  
              })
                //计数
                that.setData({
                  countclassify: that.data.countclassify+1
                })
            }              
      },

    })
      wx.stopPullDownRefresh()
  },
  onLoad: function (options) {
    this.onLoad_d();
  },
  onReady: function () {

  },
  onShow: function () {
   var that=this;
    var arrt = that.sortGoods()
    that.setData({
      classify: arrt,
      //  goods_img: JSON.parse(res.data[6].goods_img)//json字符串转数组
    });
   console.log(arrt);
  },
  onHide: function () {

  },
  onUnload: function () {

  },
 

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },
  goods_add:function (e) {
    const index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    let num = goods[index].num;
    num = num + 1;
    goods[index].num = num;
    this.setData({
      goods: goods
    });
  },
  goods_sub:function (e) {
    const index = e.currentTarget.dataset.index;
    let goods = this.data.goods;
    let num = goods[index].num;
    if (num <= 0) {
      return false;
    }
    num = num - 1;
    goods[index].num = num;
    this.setData({
      goods: goods
    });
  },
  //选项卡
  Select:function (e) {
    var cid = e.target.dataset.id;
    var id = e.target.dataset.typeid;
    this.setData({
      currentId: id,
      classifyid:cid
    })
  },

  sort_num_click:function(){
    var num = this.data.sort_num;
    if(num == 0){
      this.setData({ sort_num_bottomcolor:'red'});
      this.setData({sort_num:1});
    }else if(num == 1){
      this.setData({ sort_num_topcolor: 'red' });
      this.setData({ sort_num_bottomcolor: 'black' });
      this.setData({ sort_num: 2});
    }else if(num == 2){
      this.setData({ sort_num_topcolor: 'black' });
      this.setData({ sort_num: 0 });
    }
  },
  sort_price_click: function () {
    var num = this.data.sort_price;
    if (num == 0) {
      this.setData({ sort_price_bottomcolor: 'red' });
      this.setData({ sort_price: 1 });
    } else if (num == 1) {
      this.setData({ sort_price_topcolor: 'red' });
      this.setData({ sort_price_bottomcolor: 'black' });
      this.setData({ sort_price: 2 });
    } else if (num == 2) {
      this.setData({ sort_price_topcolor: 'black' });
      this.setData({ sort_price: 0 });
    }
  },


  tapName: function (e) {
    var goods_num = e.currentTarget.dataset.goods_num;
    //console.log(goods_num);
    wx.navigateTo({
      url: '../detail/detail?goods_num=' + goods_num
    })
  },
  Gwc: function (e) {
    wx.navigateTo({
      url: '../shangcheng/shangcheng'
    })
  },

})