function getTestContent(){
  $.ajax({
    url:'https://www.youtube.com/live_chat?is_popout=1&v=8NzYo0jmYek', 
    method:'GET',
    success: function(result){
          
          var begin = result.indexOf('liveChatTextMessageRenderer');
          var end = result.indexOf('actionPanel');
          var chat ='{'+ result.substring(begin-103, end-2)+'}';
        addErr(chat);
      }
});
}

function getYTComments(){
    $.ajax({
            url:'https://www.youtube.com/live_chat?is_popout=1&v=8NzYo0jmYek', 
            method:'GET',
            success: function(result){
              var jsn;
              try {
                var begin = result.indexOf('liveChatTextMessageRenderer');
                var end = result.indexOf('actionPanel');

                var chat ='{'+ result.substring(begin-103, end-2)+'}';
                jsn = JSON.parse(chat);
              } catch (error) {
                addErr(error);
              }
              

              jsn.actions.forEach(e => {
              
                try {
                var userName = e.addChatItemAction.item.liveChatTextMessageRenderer.authorName.simpleText;
                var userImage = e.addChatItemAction.item.liveChatTextMessageRenderer.authorPhoto.thumbnails[0].url;
                var message = e.addChatItemAction.item.liveChatTextMessageRenderer.message.runs[0].text;
                var cId = e.addChatItemAction.item.liveChatTextMessageRenderer.id; //btoa(userName + message + userImage);
                if(window.localStorage.getItem(cId) === null){
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
 
