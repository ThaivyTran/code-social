// import express .router
const router = require('express').Router();

// create routes for /users
const usersRoutes = require('./user-routes');
router.use('/users', usersRoutes);

module.exports = router;