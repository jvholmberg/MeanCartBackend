var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  ClanModel= mongoose.model('Clan');

module.exports = function (app) {
  app.use('/clan', router);
};
/* Create new Clan
==============================================================================*/
router.route('/create')
  .post(function(req, res) {
    console.log(req.body);
    var clan = new ClanModel(req.body);
    clan.save(function(err) {
      if (err) return next(err);
      res.send(clan);
    });
  });
