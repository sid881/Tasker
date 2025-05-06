const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// POST /tasks
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = new Task({ title, description });
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add task' });
  }
});

// GET /tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ created_at: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// PUT /tasks/:id/complete
// PUT /tasks/:id/complete
router.put('/:id/complete', async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, { is_completed: true });
    res.json({ success: true });
    console.log("hiiii");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to complete task' });
  }
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});


module.exports = router;
