// require('babel-register')({
//   presets: ['env', 'es2015']
// });

require = require("esm")(module/*, options*/);

// Import the rest of our application.
module.exports = require('./server.js')
