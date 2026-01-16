const db = require('../db');

exports.getStudents = (req, res) => {
  const students = db
    .prepare('SELECT * FROM students WHERE isDeleted = 0')
    .all();
  res.json(students);
};

exports.addStudent = (req, res) => {
  const { name, email, course } = req.body;

  const result = db.prepare(
    'INSERT INTO students (name, email, course) VALUES (?, ?, ?)'
  ).run(name, email, course);

  res.status(201).json({ id: result.lastInsertRowid });
};

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, course } = req.body;

  db.prepare(
    'UPDATE students SET name=?, email=?, course=? WHERE id=?'
  ).run(name, email, course, id);

  res.json({ message: 'Updated' });
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;

  db.prepare(
    'UPDATE students SET isDeleted=1 WHERE id=?'
  ).run(id);

  res.json({ message: 'Deleted (soft)' });
};

exports.getStats = (req, res) => {
  const total = db.prepare(
    'SELECT COUNT(*) as c FROM students WHERE isDeleted=0'
  ).get().c;

  const deleted = db.prepare(
    'SELECT COUNT(*) as c FROM students WHERE isDeleted=1'
  ).get().c;

  res.json({
    total,
    active: total,
    deleted
  });
};
