const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req, res) => {
  const students = await Student.find().populate('courses');
  res.json(students);
});

router.post('/', async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: 'Error creating student' });
  }
});

router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id).populate('courses');
  if (!student) {
    res.status(404).json({ message: 'Student not found' });
  } else {
    res.json(student);
  }
});

router.put('/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!student) {
    res.status(404).json({ message: 'Student not found' });
  } else {
    res.json(student);
  }
});

router.delete('/:id', async (req, res) => {
  await Student.findByIdAndRemove(req.params.id);
  res.json({ message: 'Student deleted' });
});

module.exports = router;
```

**Frontend (React)**