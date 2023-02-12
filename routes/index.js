// import express and get api routes
const router = require('express').Router();
const apiRoutes = require('./api');

// /api
router.use('/api', apiRoutes);

// error message
router.use((req, res) => {
    res.status(404).send('Wrong route');
  });

module.exports = router;