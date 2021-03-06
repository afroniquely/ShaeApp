const { MongoClient } = require('mongodb');
const dbConnection = process.env.MONGODB_URI || 'dev';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

function loginUser(req,res,next) {
  let email = req.body.email;
  let password = req.body.password;

  MongoClient.connect(dbConnection, function(err, db) {
    db.collection('memberbase').findOne({"email": email}, function(err, user) {
      if(err) throw err;
      if(user === null) {
        console.log('Can\'t find user with email ',email);
      } else  if(bcrypt.compareSync(password, user.passwordDigest)){
        res.user = user;
      }
      next();
    })
  })
}

//Making the user safe and secure!
function createSecure(email, password, callback) {
  bcrypt.genSalt(function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      callback(email,hash);
    })
  })
}

function createUser(req, res, next) {
  createSecure( req.body.email, req.body.password, saveUser)
  function saveUser(email, hash) {
    MongoClient.connect(dbConnection, function(err, db) {
      let userInfo = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: email,
        passwordDigest: hash
      }
      db.collection('memberbase').insertOne(userInfo, function(err, result) {
        if(err) throw err;
        next();
      });
    });
  }
}

module.exports = { createUser, loginUser }
