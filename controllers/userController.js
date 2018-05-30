var db = require('../models');
var User = db.User;

let userController = {
	loginPage: function(req,res){
    	res.render('login1',{title:'Login'});
	},
	/*registerPage: function(req,res){
    	res.render('register',{title:'Register'});
	},*/
	register: function(req,res){
		let username=req.body.username;
		let password=req.body.password;
		let repeat_password = req.body.repeat_password;
		if(password!==repeat_password){
			res.redirect('/')
		}
		else{
			User.create({
				username: username,
				password: password
			})
			.then(function(user){
				res.redirect('/');
			});
		}
	},
	login: function(req,res){
		let username=req.body.username;
		let password=req.body.password;
		User.find({
			where:{
				username:username,
			}
		})
		.then(function (user){
			if(!user){
				res.redirect('/')
			}else{
				if(user.password==password){
					req.session.user_id = user.id;
					res.redirect('/tasks');
				}else{
					res.redirect('/')
				}
			}
		})
	},	
	logout: function(req, res, next){
		req.session.destroy(function(err) {
			if(err){
				res.json({ret_code: 2, ret_msg: '登出失敗'});
				return;
			}           
			res.redirect('/');
		})
	}
};
module.exports = userController;