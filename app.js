var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/index/:wod', function(req, res){
    var data={age:29,job:'ninja', hobbies: ['eating','fighting']};
    res.render('index',{wod: req.params.wod, data: data});
});

app.get('/form', function(req, res){
    res.render('form');
});

app.listen(3000);