'use strict'

const router        = require('express').Router();
const { createUser, loginUser } = require('../models/user');

//CREATING A NEW USER
router.get('/join', function(req,res) {
  res.render('user/join');
});

router.post('/user/join', createUser, function(req,res) {
  console.log(req.body);
  res.redirect('/');
});

//ALLOWS AN EXISTING USER TO SIGN IN
router.get('/login', function(req,res) {
  res.render('user/login');
});

router.post('/login', loginUser,function(req,res) {
  console.log(res.user);
  req.session.user = res.user;

  req.session.save(function(err) {
    if(err) throw err;
    res.redirect('/');
  });
});

router.delete('/logout', function(req,res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

module.exports = router;
