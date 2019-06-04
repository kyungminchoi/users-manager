var express = require('express');
var router = express.Router();
var model = require('../models/index');
 
/* GET todo listing. */ //로그인 
router.get('/Find', function (req, res, next) {
    model.usersDetail.findAll({})
        .then(todos => res.json({
            error: false,
            data: todos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

/* GET todo listing. */ //회원정보조회
router.get('/Report', function (req, res, next) {
	
	const {
    	userId,
    	userPw
    } = req.body;
 
	
    model.usersDetail.findById({userId: userId}, {
        where: {
            userId: userId
        }
    	})
        .then(todos => res.json({
            error: false,
            data: todos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
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
                id: todo_id
            }
        })
        .then(todo => res.json({
            error: false,
            message: 'User Info has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* GET todo listing. */
router.delete('/Remove', function (req, res, next) {
    const todo_id = req.params.id;
    const {
    	userId,
    	userPw
    } = req.body;
 
    model.usersDetail.destroy({ where: {
        id: todo_id
    }})
        .then(status => res.json({
            error: false,
            message: 'User has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
module.exports = router;