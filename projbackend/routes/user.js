const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getUserById, getUser, getAllUsers } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
router.param('userId', getUserById);
router.get('/user/:userId', getUser);
router.get('/getAllUsers', getAllUsers);

module.exports = router;
