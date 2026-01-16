const express = require('express');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// No DB connect call needed for SQLite
// SQLite connects automatically when db.js is imported

app.use('/api/students', studentRoutes);

app.listen(5000, () => {
  console.log('🚀 Server running on port 5000');
});
