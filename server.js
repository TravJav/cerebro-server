const express = require('express'),
app = express(),
server = require('http').createServer(app);
var io = require('socket.io')(server);