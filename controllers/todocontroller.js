//body-parser
var bodyParser = require('body-parser');

//ser variable fro, body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//json data
var data=[{WOD: 'run', Laps: 2, ExpectedTime: '5 minutes'}, {WOD: 'jump', Laps: 1, ExpectedTime: '10 minutes'}];

module.exports = function(app){

    app.get('/index', function(req, res){
        
        res.render('index',{exercise: data});
    });
    
    app.get('/form', function(req, res){
        res.render('form');
    });
    
    app.post('/form', urlencodedParser, function(req, res){
       data.push(req.body);
       res.json(data);
    });

    app.delete('/form', function(req,res){

    });

};