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
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchTestData();
    this.fetchFilterData();
    // wx.request({
    //   url: '',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },
  fetchFilterData: function () { //获取筛选条件
    this.setData({
      filterdata: {
        "cate": [
          {
            "id": 0,
            "title": "全部"
          },
          {
            "id": 1,
            "title": "10万以下",

          },
          {
            "id": 2,
            "title": "10万--20万",
          },
          {
            "id": 3,
            "title": "20万--30万",
          },
          {
            "id": 4,
            "title": "30万--40万",
          },
          {
            "id": 5,
            "title": "40万--50万",
          },
          {
            "id": 6,
            "title": "50万",
          }
        ],
        "area": [
          {
            "id": 1,
            "name": "全部"
          },
          {
            "id": 2,
            "name": "50㎡以上",
          },
          {
            "id": 3,
            "name": "50㎡--100㎡",
          },
          {
            "id": 4,
            "name": "1000㎡--150㎡",
          },
          {
            "id": 5,
            "name": "150㎡--200㎡",
          },
          {
            "id": 6,
            "name": "200㎡以上",
          }
        ],
        "fengge": [
          {
            "id": 1,
            "name": "全部"
          },
          {
            "id": 2,
            "name": "中式",
          },
          {
            "id": 3,
            "name": "美式",
          },
          {
            "id": 4,
            "name": "欧式",
          },
          {
            "id": 5,
            "name": "简约",
          },
          {
            "id": 6,
            "name": "田园",
          },
          {
            "id": 7,
            "name": "地中海",
          },
          {
            "id": 8,
            "name": "东南亚",
          },
          {
            "id": 9,
            "name": "日式",
          },
          {
            "id": 10,
            "name": "后现代",
          },
          {
            "id": 11,
            "name": "新古典",
          },
          {
            "id": 12,
            "name": "现代",
          },
          {
            "id": 12,
            "name": "北欧",
          }
        ],
        "gongdi": [
          {
            "id": 1,
            "name": "附近"
          },
          {
            "id": 2,
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
  setCateIndex: function (e) { //分类一级索引
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      cateindex: dataset.cateindex,
      cateid: dataset.cateid,
      subcateindex: d.cateindex == dataset.cateindex ? d.subcateindex : 0
    })
  },
  setSubcateIndex: function (e) { //分类二级索引
    const dataset = e.currentTarget.dataset;
    this.setData({
      subcateindex: dataset.subcateindex,
      subcateid: dataset.subcateid,
    })
  },
  setAreaIndex: function (e) { //地区一级索引
    const d = this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      areaindex: dataset.areaindex,
      areaid: dataset.areaid,
      subareaindex: d.areaindex == dataset.areaindex ? d.subareaindex : 0
    })
  },
  setSubareaIndex: function (e) { //地区二级索引
    const dataset = e.currentTarget.dataset;
    this.setData({
      subareaindex: dataset.subareaindex,
      subareaid: dataset.subareaid,
    })
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
  }
})