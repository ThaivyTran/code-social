const router = require('express').Router();

const {
    getAllThoughts,
  } = require('../../controllers/thoughts-controller');

// GET, POST /api/thoughts
router.route('/').get(getAllThoughts);

module.exports = router;