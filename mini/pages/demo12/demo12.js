// pages/demo12/demo12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      }, {
        id: 1,
        name: "原创",
        isActive: false
      },
      {
        id: 2,
        name: "分类",
        isActive: false
      }, {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]
  },
  // 自定义事件 用来接收子组件传递的数据
    handleItemChange(e) {
      // 接收传递过来的参数
      const {index} = e.detail;
      let { tabs } = this.data; // let tabs = this.data.tabs;
      tabs.forEach((v, i) => i===index?v.isActive=true:v.isActive=false)
      this.setData({
        tabs
      })
  }
})