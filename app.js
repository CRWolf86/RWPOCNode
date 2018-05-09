var fs = require('fs');
var data = fs.readFileSync('wod.json');
var words = JSON.parse(data);
console.log(words);



//console.log ('server is starting');

var express = require('express');
var app = express();
var server= app.listen(3000, listening);
function listening() {
    console.log("Listening...");    
}

app.use(express.static('website'));


app.get('/add/:word/:score', addWord);

function addWord(request, response){
    var data = request.params;
    var word=data.word;
    var score = Number(data.score);
    var reply;
    if (!score) {
        reply={
            msg: "Score is required."
        }        
    }else{
        words[word] = score;
        var data = JSON.stringify(words,null,2);
        fs.writeFile('wod.json', data, finished)

        function finished(err){
            console.log('all set');
            reply = {
                word: word,
                score: score,
                msg: "thank you for your word."
            }
            response.send(reply);
        }
        
    }

    }

app.get('/all', sendAll);

function sendAll(request, response){
    response.send(words);
}

app.get('/search/:word/', searchWord);

function searchWord(request, response) {
    var word = request.params.word;
    var reply;
    if(words[word]){
        reply={
        status: "found",
        word: word,
        score:words[word] 
        }    
    }else {
        reply={
            status: "not found",
            word: word 
        }
    }
    response.send(reply);
}