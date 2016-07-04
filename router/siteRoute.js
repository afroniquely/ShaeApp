'use strict'

const router        = require('express').Router();
const jquery        = require('../bower_components/jquery/dist/jquery.js')
const { getQuote }              = require('../models/qotd');

router.get('/members',getQuote,function(req,res){
  console.log('This is the Members page')
  console.log(res.quote[0]);
  res.render('members', {quote: res.quote[0]})
        // const $body = $('body');
  });


module.exports = router;
