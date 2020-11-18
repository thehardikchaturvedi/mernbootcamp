const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { signup, signin, signout } = require('../controllers/auth');
router.post(
  '/signup',
  [
    check('name', 'Name  should be atleast 3 char').isLength({ min: 3 }),
    check('email', 'email is required').isEmail(),
    check('password', 'Password should be atleast 3 char').isLength({ min: 3 }),
  ],
  signup
);

router.post(
  '/signin',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'Password should be atleast 3 char').isLength({ min: 3 }),
  ],
  signin
);

router.get('/signout', signout);

module.exports = router;
