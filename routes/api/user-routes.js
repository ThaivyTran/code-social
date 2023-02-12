const router = require('express').Router();

const {
    getAllUsers,
    createUsers,
  } = require('../../controllers/users-controller');

// GET, POST /api/users
router.route('/').get(getAllUsers).post(createUsers);

module.exports = router;