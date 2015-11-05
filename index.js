var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('el usuario se conectó');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    //console.log('el usuario se desconectó');
  });
});

http.listen(3000, function(){
  console.log('escuchado en puerto *:3000');
});
