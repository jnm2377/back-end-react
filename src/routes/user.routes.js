'use strict'

const express    = require('express');
const bodyParser = require('body-parser');
// import basicAuth from '../lib/basic-auth-middleware.js';
// import User from '../models/user.js';
const app        = express();
const router = express.Router();
app.use('../lib/basic-auth-middleware.js', basicAuth);
app.use('../models/user.js', User);

//REGISTERING
router.post('/api/signup', jsonParser, (req, res, next) => {
  console.log('hit /api/signup');

  User.create(req.body)
  .then(token => res.send(token))
  .catch(next);
});

//LOGING IN
router.get('/api/login', basicAuth, (req, res, next) => {
  console.log('hit /api/login');

  req.user.tokenCreate()
  .then(token => res.send(token))
  .catch(next);
});
