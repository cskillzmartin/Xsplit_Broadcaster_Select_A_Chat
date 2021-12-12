var xjs = require('xjs');

xjs.ready().then(xjs.Source.getCurrentSource).then(function(mySource) {
    return mySource.setName('Select a chat');
});

window.addEventListener('storage', function(event){          
    if(window.localStorage.current){
        var cId = window.localStorage.current;
        var comment = window.localStorage.getItem(cId);
        addCmt(comment);
    }else{
        $('.jumbotron').fadeOut();
    }        
});

function addCmt(cmt){
    var parsd = JSON.parse(cmt);
    var msg = $("#myTemplate").tmpl(parsd).hide().fadeIn();
    $("#msg").append(msg);
}    