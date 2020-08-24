// pages/demo11/demo11.js
Page({
  data: {
    gender:"",
    list: [
      {
        id: 0,
        name: "苹果",
        value: "apple"
      },{
        id: 1,
        name: "香蕉",
        value: "banaer"
      },{
        id: 2,
        name: "葡萄",
        value: "grape"
      }
    ],
    checkedList:[]
  },
  // handleChange(e) {
  //   // console.log(e);
  //   let gender = e.detail.value;
  //   this.setData({
  //     gender
  //   })
  // },
  handleItemChange(e) {
    const checkedList = e.detail.value;
    this.setData({
      checkedList
    })
  }
})