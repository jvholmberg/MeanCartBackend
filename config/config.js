var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'meancart'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mean-cart'
  },

  test: {
    root: rootPath,
    app: {
      name: 'meancart'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mean-cart'
  },

  production: {
    root: rootPath,
    app: {
      name: 'meancart'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mean-cart'
  }
};

module.exports = config[env];
