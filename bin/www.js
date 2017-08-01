/**
 * Module dependencies.
 */

var app = require('../app');
var http = require('http');

/**
 * Declaring Port
 */

var port = 8000;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', (err) => {
  throw err
});
server.on('listening', ()=>{
  console.log('App Listen At: localHost:'+ port)
});