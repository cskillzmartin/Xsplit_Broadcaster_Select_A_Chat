window.localStorage.clear();      

function getVideoID(){
  var val = $('#txtVideoID').val();
  if(val){
    $('#initVideoID').css({display: "none"});
    getYTComments(val);
  }
}

function getVideoID_test(){
  var val = $('#txtVideoID').val();
  if(val){
    $('#initVideoID').css({display: "none"});
    getTestContent(val);
  }
}

function getTestContent(videoid){
  
  window.setInterval(function(){
    $.ajax({
      url:'https://www.youtube.com/live_chat?is_popout=1&v='+videoid, 
      method:'GET',
      success: function(result){
            
        var begin = result.indexOf('window["ytInitialData"] = ');
        var end = result.indexOf(';</script><yt-live-chat-app>');
        var chat = result.substring(begin+26, end);
        var jsn = JSON.parse(chat);
  
        addErr(JSON.stringify(jsn.contents.liveChatRenderer.actions));
        }
    }); 
  },1500);
}

function getYTComments(videoid){
  window.setInterval(function(){
    $.ajax({
      url:'https://www.youtube.com/live_chat?is_popout=1&v='+videoid, 
      method:'GET',
      success: function(result){
        var jsn;
        try {
          var begin = result.indexOf('window["ytInitialData"] = ');
          var end = result.indexOf(';</script><yt-live-chat-app>');

          var chat = result.substring(begin+26, end);
          jsn = JSON.parse(chat);
        } catch (error) {
          addErr(error);
        }              

        jsn.contents.liveChatRenderer.actions.forEach(e => {              
          try {
            var cId = e.addChatItemAction.item.liveChatTextMessageRenderer.id;                  
            if(window.localStorage.getItem(cId) === null){
              var userName = e.addChatItemAction.item.liveChatTextMessageRenderer.authorName.simpleText;
              var userImage = e.addChatItemAction.item.liveChatTextMessageRenderer.authorPhoto.thumbnails[0].url;
              var message = e.addChatItemAction.item.liveChatTextMessageRenderer.message.runs[0].text;
              var comment = {cId:cId, userName: userName, comment: message, userImage: userImage};
              addCmt(comment);  
              window.localStorage.setItem(cId, JSON.stringify(comment));
            }
         } catch (error) {
           //addErr(error);
         }                
        });
      }
    });
  },1500);
}

  function addCmt(cmt){
    $("#comment").prepend($("#myTemplate").tmpl(cmt));
  }    

  function addErr(cmt){
    $("#err").append(cmt);
  }    

  function writeCurrent(commentId){
    window.localStorage.setItem('current', commentId.value);
  }

  function removeCurrent(){
    window.localStorage.removeItem('current');
  }
 
