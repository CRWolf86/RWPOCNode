//express
var express = require('express');

//require controller
var todoController = require('./controllers/todocontroller');

//fire express
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use('/assets', express.static('assets'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('you are listening to port 3000');