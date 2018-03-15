//app.js
App({
	onLaunch : function() {
	    wx.login({
	      success: function(res) {
	        console.log("login");
	        var code = res.code; 
	        wx.request({
	          url : 'https://WX.cqcyit.com/weixin/gongshi/getOpenId.do',
	          data : {
	          	code : code
	          },
	          method: 'GET',
	          header: {
	              'content-type': 'application/json' 
	          },
	          /*success :function(res) {
	            console.log(res.data);
	          } */
	        })
	      }
	    })
	}
})