function setup(){
    loadJSON('../all', gotData);
    console.log("testing");

    var button = select('#submit');
    button.mousePressed(submitWord);

}

function submitWord(){
    var word = select('#wodName').value();   
    var score = select('#restSec').value();
    console.log(word, score);

    loadJSON('add/'+word+'/'+score, finished);

    function finished(data) {
        console.log(data);
    }
}

function gotData(data){
    console.log(data);
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
        var word = keys[i];
        var score = data[word];

    }
    console.log(keys);
}