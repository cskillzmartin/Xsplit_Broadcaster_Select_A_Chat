var xjs = require('xjs');

xjs.ready().then(xjs.Source.getCurrentSource).then(function(mySource) {
    return mySource.setName('Select a chat');
});

window.addEventListener('storage', function(event){          
    if(window.localStorage.current){
        $('.jumbotron').remove();
        var cId = window.localStorage.current;
        var comment = window.localStorage.getItem(cId);
        addCmt(comment);
    }else{
        $('.jumbotron').remove();
    }        
});

function addCmt(cmt){
    var parsd = JSON.parse(cmt);
    $("#myTemplate").tmpl(parsd).appendTo("#msg");
}    