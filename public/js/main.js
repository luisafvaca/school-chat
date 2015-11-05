var socket = io();
var newNickConectado = "";
var nickName = "";


$(".formularioNickname").submit(function(event){
  nickName = $(".entradaNickname").val();
  event.preventDefault();
  fadeout();
});

function fadeout(){
  if(nickName.length > 0 ){
    newNickConectado += nickName;
    $('.contenedorFormulario').addClass("fadeout");
    console.log(newNickConectado);
  }
}

$('.formularioEntradaMensaje').submit(function(){
  socket.emit(
    'chat message',
    {
      message: $('.entradaMensaje').val(),
      autor: nickName
    }
  );
  $('.entradaMensaje').val('');
  return false;
});

socket.on('chat message', function(msg){
  $('.mensajes').append($('<li class="autor">').text(msg.autor + ":"));
  $('.mensajes').append($('<li class="mensaje">').text(msg.message));
});
