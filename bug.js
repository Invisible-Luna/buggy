const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'admin' && password === 'password123') {
    res.send('You have successfully logged in!');
  } else {
    res.send('Incorrect username or password.');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
