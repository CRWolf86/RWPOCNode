//body-parser
var bodyParser = require('body-parser');

//ser variable fro, body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//json data
var data=[{wodName: 'run', selectlap: 2, extime: '5 minutes'}, {wodName: 'jump', selectlap: 1, extime: '10 minutes'}];

module.exports = function(app){

    app.get('/index', function(req, res){
        
        res.render('index',{exercise: data});
    });
    
    app.get('/form', function(req, res){
        res.render('form',{exercise: data});
    });
    
    app.post('/form', urlencodedParser, function(req, res){
       data.push(req.body);
       res.json(data);
    });

    app.delete('/form/:wodName', function(req,res){
        data = data.filter(function(exercise){
            return exercise.wodName.replace(/\-/g,'-') !== req.params.wodName;
        });
    });

};