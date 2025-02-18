const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the database query fails
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // This will not properly handle the error
      console.error(err);
    }
    res.send(results);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});