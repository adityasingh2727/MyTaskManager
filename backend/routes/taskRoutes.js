const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, updateTaskStatus, updateTaskChecklist, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/dashboard-data',protect, getDashboardData);
router.get('/user-dashboard-data',protect, getUserDashboardData);
router.get('/',protect, getTasks);// get all tasks
router.get('/:id',protect, getTaskById);// Route to get a single task by ID

router.post('/',protect,adminOnly, createTask);// Route to create a new task

router.put('/:id',protect, updateTask);// Route to update an existing task
router.put('/:id/status',protect, updateTaskStatus); //update Task Status
router.put('/:id/todo',protect, updateTaskChecklist); //update Task CheckList

router.delete('/:id',protect, adminOnly, deleteTask);// Route to delete a task
 
module.exports = router;