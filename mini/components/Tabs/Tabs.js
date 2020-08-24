// components/Tabs/Tabs.js
Component({
  // 里面存放的是要从父组件中接收的数据
  properties:{
    // 要接收的数据名称
    // aaa: {
    //   // type 要接收的数据的类型
    //   type: "String",
    //   // value 默认值
    //   value:""
    // }
    tabs:{
      type:Array,
      value:[]
    }
  },
  data: {
   
  },
  methods: {
    handleItemTab(e) {
      // 1.绑定点击事件 需要在methods中绑定
      // 2.获取被点击的索引
      // 3.获取原数组
      // 4.对数组循环
            // 1）给每一个循环性 选中属性 改为false
            // 2)给当前索引的项添加激活选中效果
      // 5.点击事件触发的时候
            // 触发父组件中的自定义事件 同时传递数据给父组件
        // this.triggerEvent("父组件自定义事件的名称", 要传递的参数)

      const {index} = e.currentTarget.dataset;

      this.triggerEvent("itemChange", {index});
      // 解构 对复杂类型进行解构的时候 就是复制了一份变量的引用而已
      // let { tabs } = this.data; // let tabs = this.data.tabs;
      // let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // tabs.forEach((v, i) => i===index?v.isActive=true:v.isActive=false)
      // this.setData({
      //   tabs
      // })
    }
  }
})
