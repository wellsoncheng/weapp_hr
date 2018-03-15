// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneErrorMsg : '',
    checkCode : '获取验证码'       
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {  
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
    wx.hideLoading({
      title : '加载中'
    })    
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

  formSubmit: function(e) {
    var that = this;
    /*
    var regstr1 =  /^\d{11}$/;
    var regstr2 =  /^\w{6,8}$/;
    if(regstr1.test(e.detail.value.password) == 11&&regstr2.test(e.detail.value.password))
    {
      that.setData({
        count : e.detail.value.count
      })
      console.log(that.data.count);
      console.log(e.detail.value.password);
      wx.request({  
        url: 'https://wx.cqcyit.com/weixin/user/login.do',  
        header: {  'content-type': 'application/json'  },
        method: "GET",
        data:{
          account : that.data.count,
          name : that.data.name,
          password : e.detail.value.password,
          wechat : that.data.nickName
        },
        success: function(res) {*/

          var res = false;
          if(res == false) {
            wx.showModal({
              title: '提示',
              content: '登录成功！你尚未在智联等平台上网申，点击确定填报简历',
              success: function (res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url : '../resume/resume'
                  });
                  console.log('用户点击确定')
                } else {
                  wx.switchTab({
                    url : '../index/index'
                  });
                }
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '登录成功！你已在智联等平台上网申，进入下一页后无需填报简历',
              showCancel : false,
              success: function (res) {
                if (res.confirm) {
                  wx.switchTab({
                    url : '../index/index'
                  });
                  console.log('用户点击确定')
                }
              }
            })

            /*getApp().globalData.profileData = '已登录';
            wx.setStorageSync('profileData',getApp().globalData.profileData);
            console.log(wx.getStorageSync('profileData'));
            wx.switchTab({
              url: '../profile/profile'
            })*/
          }
       /* },
        fail : function() {
          console.log("失败");
        }
      })
    } else {
      wx.showToast({
        title : '账号或密码输入有误',
        icon: 'none'
      })
    }*/
  },
  checkPhone : function(e) {
    var phoneNum = e.detail.value;
    wx.setStorageSync('phoneNum',phoneNum);
    wx.getStorageSync('phoneNum');
    var regstr =  /^\d{11}$/;
    if(!regstr.test(phoneNum)) {
      this.setData ({
        phoneErrorMsg : "手机号请输入11位数字"
      })
    } else {
      this.setData ({
        phoneErrorMsg : ""
      })     
    }
    console.log(this.data.phoneErrorMsg);
  },
  getCheckCode : function() {  
    /*this.setData({
      checkCode : '60s后重发'
    }),
    wx.request({
      url:'',
      method: 'GET',
      header: {
          'content-type': 'application/json' 
      },      
    })*/
  }   
})