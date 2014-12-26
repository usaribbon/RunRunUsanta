var express = require('express'),
    app     = express(),
    http    = require('http').Server(app),
    io      = require('socket.io')(http);

app.use(express.static(__dirname + '/momowasanta'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/shake.html');
});

app.get('/shake', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
    socket.on('count', function(cnt){
          console.log('ILLEGAL COUNT');
    });

    socket.on('count01', function(cnt){
          io.emit('count01', cnt);
          console.log('count01: ' + cnt);
    });
    socket.on('count02', function(cnt){
          io.emit('count02', cnt);
          console.log('count02: ' + cnt);
    });
    socket.on('count03', function(cnt){
          io.emit('count03', cnt);
          console.log('count03: ' + cnt);
    });
    socket.on('count04', function(cnt){
          io.emit('count04', cnt);
          console.log('count04: ' + cnt);
    });
    socket.on('count05', function(cnt){
          io.emit('count05', cnt);
          console.log('count05: ' + cnt);
    });

    socket.on('message', function(msg){
          //io.emit('message', msg);
          console.log('message: ' + msg);
    });




});

http.listen(3000, function(){
    console.log('litening on *:3000');
});
