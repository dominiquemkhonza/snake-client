
let connection;
// stdin -> object enables reaction to keyboard input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key, conn) {
  if (key === '\u0003') {
  console.log('ARRIVEDERCI...🐍');
  process.exit();

  }

    if (key === 'w'){
    connection.write("Move: up");

  } if (key === 'a'){
    connection.write("Move: left");

  } if (key === 's' ){
    connection.write("Move: down");

  } if (key === 'd'){
    connection.write("Move: right");

  } if (key === 'p'){
    connection.write('Say: I\'m not a snake 🐍💓!');
  }

} if (key === 'l'){
  connection.write('Say: Come stai?');
}
}

module.exports = { setupInput }
