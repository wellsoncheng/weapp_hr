//index.js
//获取应用实例
const app = getApp()

Page({
	data : {
	    sex : false,
	    date: 'xxxx-xx-xx',
	    date1: 'xxxx-xx-xx',
	    array: ['请选择','全职', '兼职', '实习'],
	    arrayOne: ['请选择','互联网/电子商务','计算机软件','IT服务(系统/数据/维护)'],    
	    index: 0,
	    arrSalary: ['请选择','1000元/月以下','1000-2000元/月','2001-4000元/月','4001-6000元/月','6001-8000元/月','8001-10000元/月','10001-15000元/月','15001-25000元/月','25001-35000元/月','35000-50000元/月'],		    	    
		iSalary: 0,
		arrWork : ['请选择','应届毕业生','我目前处于离职状态，可立即上岗','我目前在职，正考虑换个新环境（如有合适的工作机会，到岗时间一个月左右）'],	    
		arrEdu : ['请选择','大专','本科','硕士','博士','MBA','EMBA','中专','中技','高中','初中','其他'],
	},

	onLoad : function () {
		this.setData({
			phoneNum : wx.getStorageSync('phoneNum')
		})
		console.log(this.data.phoneNum);
	}, 

	onShow : function() {
	},

	sexChange : function(e) {
		console.log(e.detail.value);
	},

	//  点击日期组件确定事件  
	bindDateChange: function (e) {  
	    this.setData({  
	      date: e.detail.value  
	    })  
	},
	changeIndex : function() {
		this.setData({
			index: 1
		})
	},	 

	formSubmit : function (e) {
		console.log("提交:")
		console.log(e.detail.value.position);
		console.log(e.detail.value.stuStaTime);		
	}
})
