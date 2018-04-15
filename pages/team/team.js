// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSize: 0,
    indicatorDots: false,
    autoplay: false,
    duration: 1, //可以控制动画
    list: '',
    detail: [
      {
        id: 1,
        title: '设计师',
        list: [
          {
            id:1,
            img:'/images/1.jpg',
            title: '张三',
            subtitle: '坚固安全 质地优质',
            year:'8年',
          },
          {
            id: 2,
            img: '/images/2.jpg',
            title: '李四',
            subtitle: '专业调配 质量保证',
            year: '3年',
          },
          {
            id: 3,
            img: '/images/3.jpg',
            title: '王五',
            subtitle: '营造温馨浪漫感',
            year: '6年',
          },
          {
            img: '/images/4.jpg',
            title: '阮杭',
            subtitle: '低调奢华 高端品质',
            year: '7年',
          },
          {
            img: '/images/5.jpg',
            title: '钟佳闱',
            subtitle: '背景支架 坚实牢固',
            year: '3年',
          },
          {
            title: '精美珠光地毯',
            subtitle: '珠光闪耀 高端时尚',
          },
          {
            title: '梦幻水晶灯',
            subtitle: '奢华璀璨 高贵典雅',
          },
          {
            title: '华丽玫瑰花',
            subtitle: '精致浪漫 时尚优雅',
          },
          {
            title: '精美藤蔓',
            subtitle: '线条优美 浪漫情调',
          },
          {
            title: '主题背景板',
            subtitle: '高贵圣洁 华丽梦幻',
          },
          {
            title: '梦幻软光灯带',
            subtitle: '光芒璀璨 增添氛围',
          },
          {
            title: '欧式雕花柱',
            subtitle: '雕刻精细 增添立体感',
          },
          {
            title: '梦幻天使',
            subtitle: '人间精灵 守护爱情',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨烛光 灵动火苗',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '精致浪漫 时尚优雅',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '梦幻色调 唯美大气',
          },
        ],
      },
      {
        id: 2,
        title: '安装工',
        list: [
          {
            title: '幸福之路',
            subtitle: '唯美浪漫 时尚大气',
          },
          {
            title: '台阶装置',
            subtitle: '唯美浪漫 时尚大气',
          },
          {
            title: '时尚小舞台',
            subtitle: '精致浪漫 凸显主题',
          },
          {
            title: '精美珠光地毯',
            subtitle: '珠光闪耀 高端大气',
          },
          {
            title: '梦幻水晶灯',
            subtitle: '奢华璀璨 高贵典雅',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨烛光 灵动火苗',
          },
          {
            title: '梦幻天使',
            subtitle: '人间精灵 守护爱情',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '梦幻色调 唯美大气',
          },
          {
            title: '欧式浪漫花球',
            subtitle: '色彩搭配 增添氛围',
          },
        ],
      },
      {
        id: 3,
        title: '项目监理',
        list: [
          {
            title: '主题桌布',
            subtitle: '高贵色调 舒适柔软',
          },
          {
            title: '欧式吊幔桌围',
            subtitle: '低调奢华 高端品质',
          },
          {
            title: '欧式竹节椅',
            subtitle: '奢华享受 高贵低调',
          },
          {
            title: '欧式椅背纱',
            subtitle: '唯美梦幻 轻盈飘逸',
          },
          {
            title: '欧式主桌花',
            subtitle: '唯美大气 高贵华丽',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨时尚 精致梦幻',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '金色欧式烛台',
            subtitle: '高贵奢华 彰显品味',
          },
          {
            title: '欧式客桌花',
            subtitle: '优雅别致 精美独特',
          },
          {
            title: '欧式珠链',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '精美椅背蝴蝶结',
            subtitle: '小巧精致 凸显主题',
          },
          {
            title: '浪漫花瓣',
            subtitle: '营造气氛 增加层次',
          },
          {
            title: '主题桌卡',
            subtitle: '主题风格 精美细节',
          },
          {
            title: '主题席卡',
            subtitle: '主题风格 精美细节',
          },
        ],
      },
      {
        id: 4,
        title: '施工员',
        list: [
          {
            title: '背景架',
            subtitle: '专业调配 质量保证',
          },
          {
            title: '主题布幔',
            subtitle: '丝质柔软 色彩鲜艳',
          },
          {
            title: '欧式吊幔',
            subtitle: '低调奢华 高端品质',
          },
          {
            title: '主题背景板',
            subtitle: '高贵圣洁 华丽梦幻',
          },
          {
            title: '欧式雕花栅栏',
            subtitle: '雕刻精美 增添氛围',
          },
          {
            title: '时尚小舞台',
            subtitle: '精致浪漫 凸显主题',
          },
          {
            title: '精美地毯',
            subtitle: '高贵色调 舒适柔软',
          },
          {
            title: '浪漫白鸽',
            subtitle: '灵动活泼 寓意美好',
          },
          {
            title: '欧式喷泉',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '色彩搭配 增添氛围',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式罗马柱',
            subtitle: '尽显欧式奢华与典雅',
          },
          {
            title: '梦幻天使',
            subtitle: '人间精灵 守护爱情',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨时尚 精致梦幻',
          },
          {
            title: '梦幻云朵棉',
            subtitle: '营造梦幻视觉感',
          },
        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [
          {
            title: '背景架',
            subtitle: '专业调配 质量保证',
          },
          {
            title: '主题布幔',
            subtitle: '丝质柔软 色彩鲜艳',
          },
          {
            title: '欧式吊幔',
            subtitle: '低调奢华 高端品质',
          },
          {
            title: '主题背景板',
            subtitle: '高贵圣洁 华丽梦幻',
          },
          {
            title: '主题桌布',
            subtitle: '丝质柔软 色彩鲜艳',
          },
          {
            title: '复古香水瓶',
            subtitle: '高贵优雅 浪漫情调',
          },
          {
            title: '复古首饰盒',
            subtitle: '蕴含着典雅的贵族风情',
          },
          {
            title: '欧式罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式奢华烛台',
            subtitle: '欧式浪漫 奢华品质',
          },
          {
            title: '金色欧式烛台',
            subtitle: '高贵奢华 彰显品味',
          },
          {
            title: '梦幻天使小摆件',
            subtitle: '人间精灵 守护爱情',
          },
          {
            title: '复古留声机',
            subtitle: '色调高雅 回味经典',
          },
          {
            title: '欧式唯美花艺',
            subtitle: '色彩搭配 增添氛围',
          },
          {
            title: '梦幻蜡烛',
            subtitle: '温馨时尚 精致梦幻',
          },
          {
            title: '欧式复古罗马花盆',
            subtitle: '高雅奢华 彰显品味',
          },
          {
            title: '欧式雕花相框',
            subtitle: '高雅奢华 精雕细琢',
          },
          {
            title: '华丽玫瑰花',
            subtitle: '精致浪漫 时尚优雅',
          },
          {
            title: '精美藤蔓',
            subtitle: '线条优美 浪漫情调',
          },
          {
            title: '欧式雕花栅栏',
            subtitle: '雕刻精美 增添氛围',
          },
          {
            title: '复古蝴蝶',
            subtitle: '灵动优美 复古时尚',
          },
          {
            title: '主题签到笔',
            subtitle: '主题搭配 细节精致',
          },
          {
            title: '主题签到本',
            subtitle: '精美独特 主题搭配',
          },
          {
            title: '梦幻水晶灯',
            subtitle: '奢华璀璨 高贵典雅',
          },
          {
            title: '主题迎宾牌',
            subtitle: '独特设计 主题展示',
          },
          {
            title: '精美画架',
            subtitle: '欧式风格 完美搭配',
          },
          {
            title: '主题席位牌',
            subtitle: '主题搭配 细节精致',
          },
        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [
       
          
        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [


        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [


        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [


        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [


        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [


        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [


        ],
      },
      {
        id: 5,
        title: '检测员',
        list: [


        ],
      },
    ],
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
    
    var title = e.currentTarget.dataset.title;
    var year = e.currentTarget.dataset.year;
    
    wx.navigateTo({
      url: '../Personaldetails/Personaldetails?get_name='+title+'&get_year='+year
    })
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

  }
})