var area = require('../../data/area')
var p = 0, c = 0, d = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1: ['1室', '2室', '3室', '4室'],
    index1: 0,

    array2: ['1厅', '2厅', '3厅', '4厅'],
    index2: 0,

    array3: ['1厨', '2厨', '3厨', '4厨'],
    index3: 0,

    array4: ['1卫', '2卫', '3卫', '4卫'],
    index4: 0,

    decorarray: ['简约', '欧式', '中式'],
    decorindex: 0,

    decoratearry: ['经济型', '中档型', '高档型', '豪华型'],
    decorateindex: 0,
  },
  bindPickerChange1: function (e) {

    this.setData({
      index1: e.detail.value
    })
  },

  bindPickerChange2: function (e) {

    this.setData({
      index2: e.detail.value
    })
  },

  bindPickerChange3: function (e) {

    this.setData({
      index3: e.detail.value
    })
  },

  bindPickerChange4: function (e) {

    this.setData({
      index4: e.detail.value
    })
  },

  decor: function (e) {

    this.setData({
      decorindex: e.detail.value
    })
  },
  decorate: function (e) {

    this.setData({
      decorateindex: e.detail.value
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setAreaData()
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
  changeProvince: function (e) {
    this.resetAreaData('province')
    p = e.detail.value
    this.setAreaData('province', p)
  },
  changeCity: function (e) {
    this.resetAreaData()
    c = e.detail.value
    this.setAreaData('city', p, c)
  },
  // 选择区
  changeDistrict: function (e) {
    d = e.detail.value
    this.setAreaData('district', p, c, d)
  },

  setAreaData: function (t, p, c, d) {
    switch (t) {
      case 'province':
        this.setData({
          provinceSelIndex: p,
          cityEnabled: true
        })
        break;
      case 'city':
        this.setData({
          citySelIndex: c,
          districtEnabled: true
        })
        break;
      case 'district':
        this.setData({
          districtSelIndex: d
        })
    }

    var p = p || 0 // provinceSelIndex
    var c = c || 0 // citySelIndex
    var d = d || 0 // districtSelIndex
    // 设置省的数据
    var province = area['100000']
    var provinceName = [];
    var provinceCode = [];
    for (var item in province) {
      provinceName.push(province[item])
      provinceCode.push(item)
    }
    this.setData({
      provinceName: provinceName,
      provinceCode: provinceCode
    })
    // 设置市的数据
    var city = area[provinceCode[p]]
    var cityName = [];
    var cityCode = [];
    for (var item in city) {
      cityName.push(city[item])
      cityCode.push(item)
    }
    this.setData({
      cityName: cityName,
      cityCode: cityCode
    })
    // 设置区的数据
    var district = area[cityCode[c]]
    var districtName = [];
    var districtCode = [];
    for (var item in district) {
      districtName.push(district[item])
      districtCode.push(item)
    }
    this.setData({
      districtName: districtName,
      districtCode: districtCode
    })
  },
  resetAreaData: function (type) {
    this.setData({
      districtName: [],
      districtCode: [],
      districtSelIndex: '',
      districtEnabled: false
    })
    if (type == 'province') {
      this.setData({
        cityName: [],
        cityCode: [],
        citySelIndex: ''
      })
    }
  },
})