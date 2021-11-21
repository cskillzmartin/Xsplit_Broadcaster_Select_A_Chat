function addCmt(cmt){
    var parsd = JSON.parse(cmt);
    $("#myTemplate").tmpl(parsd).appendTo("#msg");
}    