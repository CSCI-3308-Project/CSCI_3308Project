const express = require('express');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var exjwt = require('express-jwt');
const router = express.Router();
const User = require('../db/user');

function validUser(user) {
  const validEmail = typeof user.email == 'string' && user.email.trim() != '';

  const validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.trim().length >= 6;

  return validEmail && validPassword;
}

const jwtMW = exjwt({
    secret: 'secretkey'
});

router.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
    res.send('You are authenticated'); //Sending some response when authenticated
});

router.post('/signup', (req, res, next) => {
  if (validUser(req.body)) {
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        // if user not found
        if(!user) {
          // this is a unique Email
          // hash password
          bcrypt.hash(req.body.password, 10)
            .then((hash) => {
              // insert user into db
              const user = {
                email: req.body.email,
                password: hash,
                user_courses: req.body.courses,
                created_at: new Date()
              };

              User
                .create(user)
                .then(id => {
                  res.json({
                    id,
                    message: '✅'
                  });
                });
            });
        } else {
          //email in use!
          next(new Error('A user with this email already exists.'));
        }
    });
  } else {
    next(new Error('Invalid User'));
  }
});

router.post('/login', (req, res, next) => {
  if(validUser(req.body)) {
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        if(user) {
          // compare password with hashed password
          bcrypt
          .compare(req.body.password, user.password)
          .then((result) => {
            // if the passwords matched
            if (result) {
              jwt.sign({user}, 'secretkey', { expiresIn: 129600 }, (err, token) => {
                res.json({
                  token
                });
              });
            } else {
              next(new Error('Invalid Password'));
            }
          });
        } else {
          next(new Error('This Email address is not registered.'));
        }
      });
  } else {
    next(new Error('Email or Password were typed incorrectly. Password must be at least 6 characters long.'));
  }
});

module.exports = router;
