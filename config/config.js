var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'warzonebackend'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/warfare-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'warzonebackend'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/warfare-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'warzonebackend'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/warfare-production'
  }
};

module.exports = config[env];
