var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET todo listing. */ //로그인 
router.get('/Find', function (req, res, next) {
	const {
    	userId,
    	userPw
    } = req.body;
    model.usersDetail.findOne({
	        where: {
	            userId: userId,
	            userPw: userPw
	        }
    	})
    	.then(function(data){
	    	if((data == null || data == undefined) === true){
	    		res.json({result:false, message:'아이디 또는 비밀번호가 맞지 않습니다.'})
	    	}
	    	else{
	    		res.json({
	                error: false,
	                message: 'Login completed.'
	            })
	    	}
    	});
});

/* GET todo listing. */ //회원정보조회
router.get('/Report', function (req, res, next) {
	const {
    	userId,
    	userPw
    } = req.body;
    model.usersDetail.findOne({
	        where: {
	            userId: userId,
	            userPw: userPw
	        }
    	})
    	.then(function(data){
	    	if((data == null || data == undefined) === true){
	    		res.json({result:false, message:'아이디 또는 비밀번호가 맞지 않습니다.'})
	    	}
	    	else{
	    		res.json({
	                error: false,
//	                message: 'Login completed.',
	                data: data
	            })
	    	}
    	});
});
 
 
/* POST todo. */ // 회원가입
router.post('/Create', function (req, res, next) {
    const {
    	userId,
    	userPw,
    	name,
    	phoneNum,
    	email,
    	userType,
    	birth
    } = req.body;
    model.usersDetail.findOne({where:{userId:req.body.userId}})
    	.then(function(data){
    	if((data == null || data == undefined) === false){
    		res.json({result:false, message:'이미 사용중인 아이디입니다.'})
    	}
    	model.usersDetail.create({
    		userId: userId,
    		userPw: userPw,
    		name: name,
    		phoneNum: phoneNum,
    		email: email,
    		userType: userType,
    		birth: birth
        })
        .then(todo => res.status(201).json({
            error: false,
            data: todo,
            message: 'New User has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
    });
    
});
 
 
/* update todo. */
router.put('/Modi', function (req, res, next) {
 
    const todo_id = req.params.id;
 
    const {
    	userId,
    	userPw,
    	name,
    	phoneNum,
    	email,
    	userType,
    	birth
    } = req.body;
    model.usersDetail.findOne({
        where: {
            userId: userId,
            userPw: userPw
        }
	}).then(function(data){
		if((data == null || data == undefined) === true){
    		res.json({result:false, message:'아이디 또는 비밀번호가 맞지 않습니다.'})
    	}
		else{
			model.usersDetail.update({
		    	userId: userId,
				userPw: userPw,
				name: name,
				phoneNum: phoneNum,
				email: email,
				userType: userType,
				birth: birth
	        }, {
	            where: {
	                userId: userId
	            }
	        })
	        .then(todo => res.json({
	            error: false,
	            message: 'User Info has been updated.',
	            data: data
	        }))
	        .catch(error => res.json({
	            error: true,
	            error: error
	        }));
		}
	});
    
});
 
 
/* GET todo listing. */
router.delete('/Remove', function (req, res, next) {
    const inputCode = req.params.input;
    const {
    	userId,
    	userPw
    } = req.body;
    model.usersDetail.findOne({
        where: {
            userId: userId,
            userPw: userPw
        }
	}).then(function(data){
	    	if((data == null || data == undefined) === true){
	    		res.json({result:false, message:'아이디 또는 비밀번호가 맞지 않습니다.'})
	    	}
	    	else{
	    		 model.usersDetail.destroy({ where: {
	    		        userId: userId,
	    		        userPw: userPw
    		    }})
		        .then(status => res.json({
		            error: false,
		            message: 'User has been delete.'
		        }))
		        .catch(error => res.json({
		            error: true,
		            error: error
		        }));
	    	}
	    })
   
});

module.exports = router;