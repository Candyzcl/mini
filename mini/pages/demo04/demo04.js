// pages/demo04/demo04.js
Page({
  data: {
    num: 0
  },
  // 输入框input事件的执行逻辑
  // handleInput(e) {
  //   // console.log(e.detail.value)
  //   this.setData({
  //     num: e.detail.value
  //   })
  // }
  handletap(e) {
    // console.log(e)
    // 1.获取自定义属性 operaiton
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation
    })
  }
})