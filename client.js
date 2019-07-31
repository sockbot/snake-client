const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('data', (serverMessage) => {
    console.log('Message from server: ', serverMessage);
  });

  conn.on('connect', () => {
    console.log('Connection established');
    conn.write('Name: AJC');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50)
  });

  return conn;
};

module.exports = {
  connect
};