var xjs = require('xjs');

xjs.ready().then(xjs.Source.getCurrentSource).then(function(mySource) {
    return mySource.setName('Select a chat');
});

window.addEventListener('storage', function(event){          
    if(window.localStorage.current){
        var cId = window.localStorage.current;
        var comment = window.localStorage.getItem(cId);
        $('.jumbotron').fadeOut(10, 'linear');
        addCmt(comment);
    }   

    if(window.localStorage.remove){
        removeCurrent();
    }
});

function addCmt(cmt){
    var parsd = JSON.parse(cmt);
    var msg = $("#myTemplate").tmpl(parsd).hide().fadeIn();
    $("#msg").append(msg);
    window.localStorage.removeItem('current');
}    

function removeCurrent(){
    $('.jumbotron').fadeOut();
    window.localStorage.removeItem('remove');
  }