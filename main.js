var io = require('socket.io').listen(9001)
  , fs = require('fs')
  , app = require('http').createServer(handler)

app.listen();

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.on('cc7511e2-87df-400e-a25f-9f5bcdcf6a44', function (input) {
    io.sockets.emit('msg', input);
  });

  socket.on('player', function(input) {
    io.sockets.emit('player', input);
  });
});
