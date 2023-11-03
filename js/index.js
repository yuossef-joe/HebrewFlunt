const express = require('express');
const pasth = require("path");
const bcrypt = require("bcrypt");

const app = express();


const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/loginpage');
});

app.post('/login', (req, res) => {
  // Implement login logic here
});

app.post('/register', (req, res) => {
  // Implement register logic here
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});