const app = require('./app.js');

const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
  if (err) return console.log(`\u274c  API server ERR: ${err}`);
  console.log(`\u2705  API is running on port ${PORT}`);
});
