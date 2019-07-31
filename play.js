const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.218',
    port: 50541
  })

  conn.setEncoding('utf8')

  conn.on('data', (serverMessage) => {
    console.log('Message from server: ', serverMessage)
  })

  return conn;
};

console.log('Connecting ...');
connect();