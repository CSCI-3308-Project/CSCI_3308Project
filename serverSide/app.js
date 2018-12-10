var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cors = require('cors');

var routes = require('./routes/index');
var user = require('./routes/user');
var auth = require('./auth/index');
var data = require('./data/index');

var app = express();

require('dotenv').config()

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/auth', auth);
app.use('/', routes);
app.use('/user', user);
app.use('/data', data);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
