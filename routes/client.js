const express = require('express');
const router = express.Router();
const authConf = require('../config/auth');
const {ensureAuthenticated} = require('../services/passport/auth');
const AuthHelpers = require('../helpers/AuthHelpers');

router.get('/client', ensureAuthenticated, (req, res) => {
    res.render('client')
  });
  

module.exports = router;
