Page({
  data: {
    classify: [
      { name: '特惠推荐', id: "1" },
      { name: '地板地砖', id:"2" },
      { name: '沙发', id: "3"},
      { name: '书桌', id:"4"}],
    currentId:1,
    list:['', '', '', '', '', '', "", "", "", ""],
    sort_num:0,
    sort_num_topcolor: 'black',
    sort_num_bottomcolor: 'black',
    sort_price: 0,
    sort_price_topcolor: 'black',
    sort_price_bottomcolor: 'black',
    sort_judge: 0,
    sort_judge_topcolor: 'black',
    sort_judge_bottomcolor: 'black',
    goods:[
      { name: '新中式家具客厅', solded: 629, stock: 994, price: '4583.00', num: 0, pic:'https://gzleren.com/minishuxiangmdjj/Data/UploadFiles/product/20170815/1502793678315029.png'},
      { name: '五彩精灵瓷砖毕莎罗仿古砖地板砖防滑阳台客厅地砖', solded: 519, stock: 694, price: '130.00', num: 0, pic:'https://img14.360buyimg.com/n7/jfs/t12586/233/2144942493/335467/16874501/5a335d5bNb5701f92.png' },
      { name: '贝尔（BBL） 贝尔地板 强化木地板 大亚基材', solded: 318, stock: 745, price: '150.00', num: 0, pic:'https://img13.360buyimg.com/n7/jfs/t8968/355/468173706/375437/8442fc56/59a9164bN17f7c07b.jpg' },
      { name: '北欧客厅布艺沙发 可拆洗小户型三人位懒人沙发', solded: 745, stock: 147, price: '1599.00', num: 0, pic:'https://img14.360buyimg.com/n7/jfs/t5068/203/660818261/231865/9d2e2fd3/58e5b4c7N6ebc7f5c.jpg' },
      { name: '上林春天 书桌 实木书桌学生写字桌家用小户型办公桌', solded: 412, stock: 85, price: '558.00', num: 0, pic:'https://img14.360buyimg.com/n7/jfs/t14542/271/1971300113/180422/2bf72bfc/5a644076N308e9469.jpg' },
      { name: '鲁菲特 沙发 实木沙发 中式客厅实木布艺转角沙发组合', solded: 652, stock: 96, price: '1388.00', num: 0, pic:'https://img12.360buyimg.com/n7/jfs/t14905/137/1829438747/255842/d94e40c3/5a59c06bNa656308c.jpg' },
      { name: 'pvc自粘墙纸壁纸砖纹墙贴', solded: 122, stock: 916, price: '32.00', num: 0, pic: 'https://img13.360buyimg.com/n7/jfs/t4657/165/3221937109/470129/c700f6ae/58f85861N68561815.jpg' }
    ]
  },
  onLoad: function (options) {
    
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

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
  Select:function (e) {
    var id = e.target.dataset.typeid;
    this.setData({
      currentId: id
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
  sort_judge_click: function () {
    var num = this.data.sort_judge;
    if (num == 0) {
      this.setData({ sort_judge_bottomcolor: 'red' });
      this.setData({ sort_judge: 1 });
    } else if (num == 1) {
      this.setData({ sort_judge_topcolor: 'red' });
      this.setData({ sort_judge_bottomcolor: 'black' });
      this.setData({ sort_judge: 2 });
    } else if (num == 2) {
      this.setData({ sort_judge_topcolor: 'black' });
      this.setData({ sort_judge: 0 });
    }
  },
  s:function(ev){
      
  },
  tapName: function (e) {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  Gwc: function (e) {
    wx.navigateTo({
      url: '../shangcheng/shangcheng'
    })
  },

})