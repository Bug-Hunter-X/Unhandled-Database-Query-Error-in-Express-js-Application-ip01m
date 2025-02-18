const express = require('express');
const app = express();
const db = require('./db'); // Assuming you have a separate module for database interaction
app.get('/', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM users');
    res.send(results);
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//db.js (example)
const { Pool } = require('pg'); // Or your database library
const pool = new Pool({
  // Your database connection details here
});
module.exports = {
  query: async (text, params) => {
    const client = await pool.connect();
    try {
      const result = await client.query(text, params);
      return result.rows; 
    } finally {
      client.release();
    }
  }
};