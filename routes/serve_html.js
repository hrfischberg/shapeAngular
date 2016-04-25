'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});

module.exports = router;
