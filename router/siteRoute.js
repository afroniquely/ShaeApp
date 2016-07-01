'use strict'

const router = require('express').Router();

router.get('/members', function(req,res){
  res.render('members')
})

router.get('/login', function(req,res){
  res.render('login')
})



module.exports = router;

