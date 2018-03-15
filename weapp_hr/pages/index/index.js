//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    state : 1
  },
  onLoad: function() {

  },

  onShow: function() {

  },

  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },  

  //判断是否网申过
  checkDeliver : function() {
    /*wx.request({  
        url: 'https://wx.cqcyit.com/weixin/user/login.do',  
        header: {  'content-type': 'application/json'  },
        method: "GET",
        data:{
          account : that.data.count,
          name : that.data.name,
          password : e.detail.value.password,
          wechat : that.data.nickName
        },*/
        var delivered = false;
        console.log(delivered);
        //如果已经网申过，显示提示
        if (delivered == true) {
          wx.showModal({
            title : "提示",
            content : '你已经在智联等平台上投递过简历，无需在此处填写简历',
            showCancel : false,
          })
        } else {  //未网申，进行简历填写
          wx.navigateTo({
            url : '../resume/resume'
          }) 
        }

      /*}
    })*/

  },

  onHide : function() {

  }
})
