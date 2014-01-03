#!/usr/bin/env node

var io = require('socket.io-client')
  , program = require('commander')

var args = program
  .version('0.0.1')
  .option('-m, --msg <text>', 'The text of the message to send')
  .parse(process.argv);

if (args.msg.length) {
  var socket = io.connect('http://metafluff.com:9001')
  socket.on('connect', function () {
    socket.emit('cc7511e2-87df-400e-a25f-9f5bcdcf6a44', args.msg)
    process.exit()
  })
}
