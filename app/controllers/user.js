var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  UserModel = mongoose.model('User');

module.exports = function (app) {
  app.use('/user', router);
};
/* Create new User
==============================================================================*/
router.route('/create')
  .post(function(req, res) {
    console.log(req.body);
    var user = new UserModel(req.body);
    user.save(function(err) {
      if (err) return next(err);
      res.send(user);
    });
  });

/* Update existing User
==============================================================================*/
router.route('/update')
  .post(function(req, res) {
    console.log(req.body);
    UserModel.findById(req.body._id, function(err, user) {
      if (err) return next(err);
      //user.name = req.body.name;
      user.save(function(err, user, count) {
        res.send({message: 'user updated'});
      });
    });
  });

/* Gell all Users
==============================================================================*/
router.route('/all')
  .post(function(req, res) {
    console.log(req.body);
    var user = UserModel.find(function(err, users, count) {
      res.send(users);
    });
  });

/* Delete Users
==============================================================================*/
router.route('/delete')
  .post(function(req, res) {
    console.log(req.body);
    var user = UserModel.find(function(err, users, count) {
      res.send(users);
    });
  });
