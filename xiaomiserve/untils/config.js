
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

var Mongoose = {
	url : 'mongodb://localhost:27017/xiaomi',
	connect(){
		mongoose.connect(this.url , { useNewUrlParser: true }, (err)=>{
			if(err){
				console.log('数据库连接失败');
				return;
			}
			console.log('数据库连接成功');
		});
	}
};

var Email = {
	config : {
		host: "smtp.qq.com",
	    port: 587,
	    auth: {
	      user: '3478162259@qq.com', 
	      pass: 'golujwjkbtzodbja'
	    }
	},
	get transporter(){
		return nodemailer.createTransport(this.config);
	},
	get verify(){
		return Math.random().toString().substring(2,6);
	},
	get time(){
		return Date.now();
	}
};

var Head = {
	baseUrl : 'http://localhost:3000/uploads/'
}

module.exports = {
	Mongoose,
	Email,
	Head
};