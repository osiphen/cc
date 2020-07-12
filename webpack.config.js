const path = require('path');
var glob = require("glob");


module.exports = {
  entry: {
    phaser: './public/js/game/phaser.min.js',
    init: './public/js/game/init.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js/'),
  },
};