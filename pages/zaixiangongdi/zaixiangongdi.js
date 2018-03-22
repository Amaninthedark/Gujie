var app = getApp();
Page({
  data: {
    filterdata: {},  //筛选条件数据
    showfilter: false, //是否显示下拉筛选
    showfilterindex: null, //显示哪个筛选类目
    cateindex: 0,  //一级分类索引
    cateid: null,  //一级分类id
    subcateindex: 0, //二级分类索引
    subcateid: null, //二级分类id
    areaindex: 0,  //一级城市索引
    areaid: null,  //一级城市id
    subareaindex: 0,  //二级城市索引
    subareaid: null, //二级城市id
    testdata: [], //服务集市列表
    scrolltop: null, //滚动位置
    page: 0, //分页 
    abcc:1,
    second_height: 0
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchTestData();
    this.fetchFilterData();


    this.mapCtx = wx.createMapContext('myMap')  //地图
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    }),
      this.mapCtx.moveToLocation() 


    console.log('onLoad')              //页面高度
  
    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 可使用窗口宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
          second_height: res.windowHeight -100 / 750 * 300
        })
      }
    })





   },



  moveToLocation: function () {      //地图
    this.mapCtx.moveToLocation()
  },

  translateMarker: function () {    //地图  
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      },

    })
  },
  includePoints: function () {      //地图
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    }) 
  },
  fetchFilterData: function () { //获取筛选条件
    this.setData({
      filterdata: {
        "cate": [
          {
            "id": 0,
            "name": "全部"
          },
          {
            "id": 1,
            "name": "10万以下",

          },
          {
            "id": 2,
            "name": "10万--20万",
          },
          {
            "id": 3,
            "name": "20万--30万",
          },
          {
            "id": 4,
            "name": "30万--40万",
          },
          { 
            "id": 5,
            "name": "40万--50万",
          },
          {
            "id": 6,
            "name": "50万",
          }
        ],
        "area": [
          {
            "id": 7,
            "name": "全部"
          },
          {
            "id": 8,
            "name": "50㎡以上",
          },
          {
            "id": 9,
            "name": "50㎡--100㎡",
          },
          {
            "id": 10,
            "name": "1000㎡--150㎡",
          },
          {
            "id": 11,
            "name": "150㎡--200㎡",
          },
          { 
            "id": 12,
            "name": "200㎡以上",
          }
        ],
        "fengge": [
          {
            "id": 13,
            "name": "全部"
          },
          {
            "id": 14,
            "name": "中式",
          },
          {
            "id": 15,
            "name": "美式",
          },
          {
            "id": 16,
            "name": "欧式",
          },
          {
            "id": 17,
            "name": "简约",
          },
          {
            "id": 18,
            "name": "田园",
          },
          {
            "id": 19,
            "name": "地中海",
          },
          {
            "id": 20,
            "name": "东南亚",
          },
          {
            "id": 21,
            "name": "日式",
          },
          {
            "id":22,
            "name": "后现代",
          },
          {
            "id": 23,
            "name": "新古典",
          },
          {
            "id": 24,
            "name": "现代",
          },
          {
            "id": 25,
            "name": "北欧", 
          } 
        ],
        "gongdi": [
          {
            "id":26, 
            "name": "附近"
          },
          {  
            "id":27,
            "name": "评论",
          }
        ]
      }
    })
  },
  fetchTestData: function () {  //获取城市列表
    let _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    const perpage = 15;
    this.setData({
      page: this.data.page + 1
    })
    const page = this.data.page;
    const newlist = [];
    for (var i = (page - 1) * perpage; i < page * perpage; i++) {
      newlist.push({
        "id": i + 1,
        "name": "微信小程序下拉刷新上拉加载" + (i + 1)
      })
    } 
    setTimeout(() => {
      _this.setData({
        testdata: _this.data.testdata.concat(newlist)
      })
    }, 1500) 
  },
  setFilterPanel: function (e) { //展开筛选面板
    const d = this.data;
    const i = e.currentTarget.dataset.findex;
    if (d.showfilterindex == i) {
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
    } else {
      this.setData({
        showfilter: true,
        showfilterindex: i,
      })
    }
  },
  setCateIndex: function (e) { //分类一级索引  装修价格
  
    const d = this.data; 
    const dataset = e.currentTarget.dataset;
    console.log(dataset.cateid)
    this.setData({
      cateindex: dataset.cateindex,
      cateid: dataset.cateid,
      subcateindex: d.cateindex == dataset.cateindex ? d.subcateindex : 0
    })
    
      
      
    this.setData({
      abcc: this.data.abcc + 1
    }), 
      console.log(this.data.abcc);
  },  
   
 
  hideFilter: function () { //关闭筛选面板
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
  },
  scrollHandle: function (e) { //滚动事件
    this.setData({
      scrolltop: e.detail.scrollTop
    })
  },
  goToTop: function () { //回到顶部
    this.setData({
      scrolltop: 0
    })
  },
  scrollLoading: function () { //滚动加载
    this.fetchTestData();
  },
  onPullDownRefresh: function () { //下拉刷新
    this.setData({
      page: 0,
      testdata: []
    })
    this.fetchTestData();
    this.fetchFilterData();
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 1000)
  },
  gongdifenbu: function () {
    wx.navigateTo({
      url: '../gongdifenbu/gongdifenbu'
    });
  },
  jingdiananlie: function () {
    wx.navigateTo({
      url: '../jingdiananlie/jingdiananlie'
    });
  },
})