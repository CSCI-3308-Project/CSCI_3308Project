const express = require('express');
const router = express.Router();

const Data = require('../db/data');

router.get('/', (req, res, next) => {
  Data.getAll().then( data => {
    res.send(data);
  });
});

router.post('/', (req, res, next) => {
  var obj = req.body;
  var dataArr = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      dataArr.push(obj[key]);
    }
  }
  Data.getSpecific(dataArr).then( data => {
    res.send(data);
  });
});

module.exports = router;
