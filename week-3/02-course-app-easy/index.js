const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
//app.use(bodyParser.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post('/admin/signup', (req, res) => {
  let username = req.body.username
  let password = req.body.password
  console.log(username, password);

  ADMINS.push({
    username: username,
    password: password,
    status: "created"
  })

  res.send('User created successfully');
});

function logArray(arr) {
  for (element of arr) {
    console.log(element)
  }
}

app.post('/admin/login', (req, res) => {

  logArray(ADMINS);

  let username = req.headers.username
  let password = req.headers.password

  console.log(username, password);
  let adminUser = ADMINS.find((adminUser) => {
    return (adminUser.username == username && adminUser.password == password)
  })

  if (adminUser != undefined) {
    adminUser.status = "logged-in";
    console.log(adminUser);
    res.send('logged in');  
  } else {
    res.status(404).send('Login failed')
  }

});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
