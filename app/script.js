const socket = io();

socket.on("connect", function() {
  console.log('connected with id')
  socket.emit("load", 'w');
});

let previousAuthor;
let noAuthorBreak;
let firstTimeFlag;

socket.on('receive message', function(name, message){
  console.log('received message from server.' + name + message);
  
  if(previousAuthor == null){
    previousAuthor = name;
    firstTimeFlag = true;
  }else if(previousAuthor == name){
    noAuthorBreak = true;
    
  }else if(previousAuthor != name){
    noAuthorBreak = false;
    previousAuthor = name;
    firstTimeFlag = true;
  }else {
    console.log('wtf did you do');
  }
  
  var authorName = document.createElement('span');
  authorName.classList.add('author');
  authorName.innerHTML = '<br>' + name;
  
  var newMessage = document.createElement('span');
  newMessage.classList.add('message');
  if(!noAuthorBreak && !firstTimeFlag){
    newMessage.innerHTML = message + '<br><br>';
  }else {
    newMessage.innerHTML = message;
  }

  if(!noAuthorBreak){
    document.querySelector('.chatframe').appendChild(authorName);
  }
  document.querySelector('.chatframe').appendChild(newMessage);
});

function uwu(name, message){
  socket.emit('send message', name, message);
}
