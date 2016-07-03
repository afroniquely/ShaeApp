'use strict'

const router = require('express').Router();
const { createUser, loginUser } = require('../models/user');
const qotds = require('../models/qotd');

router.get('/members', function(req,res){
  res.render('members')
})

// router.get('/login', function(req,res){
//   res.render('login')
// })

router.get('/join', function(req,res) {
  res.render('member/join');
});

router.post('/new', createUser, function(req,res) {
  console.log(req.body);
  res.redirect('/');
});

// router.get('/login', function(req,res) {
//   res.render('member/login');
// });

// router.post('/login', loginUser,function(req,res) {
//   console.log(res.user);
//   req.session.user = res.user;

//   req.session.save(function(err) {
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

// router.delete('/logout', function(req,res) {
//   req.session.destroy(function(err) {
//     res.redirect('/');
//   });
// });

module.exports = router;
