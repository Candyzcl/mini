// pages/demo10/demo10.js
Page({
  data: {
    // 标签字符串
    // html: '<div class="superbanner-inner"><a href="//huodong.taobao.com/wow/a/act/tao/tmc/27484/wupr?spm=a211oj.15210753.5616079085.2.19824c30xO1h6L&amp;disableNav=YES&amp;wh_pid=main-204407&amp;acm=lb-zebra-634493-8828363.1003.4.8453324&amp;scm=1003.4.lb-zebra-634493-8828363.OTHER_15954576455551_8453324" class="tmall-logo fl">< img src="//img.alicdn.com/tfs/TB1TRHzfLzO3e4jSZFxXXaP_FXa-90-80.png" alt="天猫" ></a>   '
    html: [
      {
        // 1.div标签 name属性来指定
        name: "div",
        // 2.标签上有哪些属性
        attrs: {
          // 标签上的属性 class style
          class:"my_div",
          style:"color:red;"
        },
        // 3.子节点children 要接收的数据类型和nodes第二种渲染方式的数据类型一致
        children: [
          {
            name:"p",
            attrs:{},
            //放文本
            children:[
              {
                type: "text",
                text: "hello"
              }
            ]
          }
        ]
      }
    ]
  }
})