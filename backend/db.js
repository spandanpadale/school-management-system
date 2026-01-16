const Database = require('better-sqlite3');

// Creates school.db file automatically
const db = new Database('school.db');

// Create table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    course TEXT NOT NULL,
    isActive INTEGER DEFAULT 1,
    isDeleted INTEGER DEFAULT 0
  )
`).run();

console.log('✅ SQLite database connected');

module.exports = db;
