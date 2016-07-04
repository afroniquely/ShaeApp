'use strict'
const router = require('express').Router();
const { getQuote } = require('../models/qotd');

router.get('/', function(req,res){
  // const mydata = res.quote;
  res.render('home')
})

module.exports = router;
