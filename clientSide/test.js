var assert = require('assert'),
http = require('http');
const express = require('express');
//const bcrypt = require('bcrypt');
//var jwt = require('jsonwebtoken');
//var exjwt = require('express-jwt');
const router = express.Router();
const User = require('../db/user_id');



describe('/', function () {

  it('Front end is up', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('Back end is up', function (done) {
    http.get('http://localhost:8000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });









//it ('users register into database',function(done) {

//assert.equal("shania@gmail.com",)


//}


});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Study Buddies Server', condition: true, anyArray: [1,2,3]});
});

router.get('/test/:id/', function(req, res, next) {
  res.render('test', {output: req.params.id})
});

router.post('/test/submit', function(req, res, next) {
  var id = req.body.id;
  res.redirect('/test/' + id);
});

module.exports = router;
