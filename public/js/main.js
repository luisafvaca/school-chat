var socket = io();


$(".formularioNickname").submit(function(event){
  var nickName = $(".entradaNickname").val();
  event.preventDefault();
  function redireccionar(){
    if(nickName.length > 0 ){
      //window.location.href = 'mainChat.html';
      console.log("hola mundo");
    }
  }
  redireccionar();
});

$('.formularioEntradaMensaje').submit(function(){
  socket.emit('chat message', $('.entradaMensaje').val());
  $('.entradaMensaje').val('');
  return false;
});

socket.on('chat message', function(msg){
  console.log("hola");
  $('.mensajes').append($('<li>').text(msg));
});
