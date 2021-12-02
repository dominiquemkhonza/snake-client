const net = require('net');
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server! 🐍');
    conn.write('Name: Dom');
 
  });


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;

};



module.exports = { connect };

//165.227.47.243