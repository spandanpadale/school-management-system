    const express = require('express');
const router = express.Router();
const controller = require('../controllers/StudentController');

router.get('/', controller.getStudents);
router.post('/', controller.addStudent);
router.put('/:id', controller.updateStudent);
router.delete('/:id', controller.deleteStudent);
router.get('/stats/dashboard', controller.getStats);

module.exports = router;
