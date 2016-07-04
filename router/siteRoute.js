'use strict'

const router        = require('express').Router();
const jquery        = require('../bower_components/jquery/dist/jquery.js')
const { createUser, loginUser } = require('../models/user');
const { getQuote }              = require('../models/qotd');

router.get('/members',getQuote,function(req,res){
  console.log('This is the Members page')
  console.log(res.quote[0]);
  res.render('members', {quote: res.quote[0]})
        // const $body = $('body');
  });

router.get('/join', function(req,res) {
  res.render('user/join');
});

router.post('/join', createUser, function(req,res) {
  console.log(req.body);
  res.redirect('/');
});

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
