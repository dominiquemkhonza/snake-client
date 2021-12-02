// modifying initial player file to handle user input (movement, key entries)

const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connecting ...');
connect();

setupInput();