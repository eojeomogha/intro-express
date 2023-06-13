// Load express
const express = require('express');
const path = require('path');

// require the To Do "database"
const studentDb = require('./data/students');

//create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)


// Mount routes


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
    // Path MUST start with a leading slash
    res.redirect('/students');
});

app.get('/home', function (req, res) {
    // Never begin the name of the template with a forward slash i.e. /
    res.render('home');
});

app.get('/students', function(req, res) {
    // could also be rewritten as
    // const studentsDb = studentsDb.getAll();
    // res.render('students/index', { students });
    res.render('students/index', {
        students: studentDb.getAll()
    });
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
});

