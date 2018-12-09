var assert = require('assert'),
http = require('http');

var expect = require('chai').expect;
var request = require('request');

describe('Server', function () {
  it('Front end', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
});

  it('Back end', function (done) {
    http.get('http://localhost:8000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe ('Login page', function() {
  it('status', function(done){
    request('http://localhost:3000/login', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe ('Register page', function() {
  it('status', function(done){
    request('http://localhost:3000/register', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
describe ('Home page', function() {
  it('status', function(done){
    request('http://localhost:3000/home', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});



describe ('Database is Populated', function() {
  it('status', function(done){
    request('http://localhost:8000/data', function(error, response, body) {
      Object.size = function(body){
        var size = 0, key;
        for (key in body){
          if (body.hasOwnProperty(key)) size++;
        }
        return size
      };
      var size = Object.size(body);
      expect(body).to.have.lengthOf(size);
      done();
    });
  });
});
