// import express .router
const router = require('express').Router();

// create routes for /users
const usersRoutes = require('./user-routes');
router.use('/users', usersRoutes);

// create routes for /thoughts
const thoughtsRoutes = require('./thought-routes');
router.use('/thoughts', thoughtsRoutes);

module.exports = router;