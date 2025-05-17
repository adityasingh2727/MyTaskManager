const express = require('express');
const { adminOnly, protect } = require('../middlewares/authMiddleware');
const { getUserById, getUsers } = require('../controllers/userController');

const router = express.Router();
// User Management Routes

// Route to get user details
router.get('/', protect, adminOnly, getUsers);

// Route to update user details
router.get('/:id',protect, getUserById);

module.exports = router;