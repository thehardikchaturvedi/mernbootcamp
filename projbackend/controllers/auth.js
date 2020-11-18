const User = require('../models/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('config');

exports.signup = (req, res) => {
  errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array()[0].msg });
  }
  try {
    const user = new User(req.body);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({ err: err });
      }

      return res.json({ name: user.name, email: user.email, id: user._id });
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' });
  }
};

exports.signin = (req, res) => {
  errors = validationResult(req);
  const { email, password } = req.body;
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  try {
    User.findOne({ email }, (err, user) => {
      if (err || !user) {
        res.status(400).json({ error: 'User Not Found' });
      }
      if (!user.authenticate(password)) {
        return res
          .status(401)
          .json({ error: 'Email and password does not match' });
      }
      //create token
      const token = jwt.sign({ _id: user._id }, config.get('jsonWebToken'));
      //put in cookie
      res.cookie('token', token, new Date() + 9999);
      //send response to frontend
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, name, email, role } });
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Server error' });
  }
};
exports.signout = (req, res) => {
  res.clearCookie();
  return res.json({ msg: 'User Signed Out successfully' });
};

//protected routes
exports.isSignedIn = expressJwt({
  secret: config.get('jsonWebToken'),
  userProperty: 'auth',
  algorithms: ['RS256'],
});

exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    res.json({ error: 'You are not authenticated' });
  }
  next();
};
exports.isAdmin = (req, res, next) => {
  if (req.profile.role == 0) {
    res.json({ msg: 'You Are not authorized' });
  }
  next();
};
